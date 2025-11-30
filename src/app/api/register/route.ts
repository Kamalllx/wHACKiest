import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;
const collectionName = process.env.MONGODB_COLLECTION!;

const USN_REGEX = /^1MS\d{2}[A-Z]{2}\d{3}(-T)?$/i;

function validateUSN(usn: string): { valid: boolean; error?: string } {
  if (!usn) return { valid: true };
  
  const trimmedUSN = usn.trim().toUpperCase();
  
  if (trimmedUSN.length !== 10 && trimmedUSN.length !== 12) {
    return { valid: false, error: `USN must be 10 or 12 characters. Got ${trimmedUSN.length} characters.` };
  }
  
  if (!USN_REGEX.test(trimmedUSN)) {
    return { valid: false, error: `Invalid USN format. Expected format: 1MSXXYY123 or 1MSXXYY123-T` };
  }
  
  return { valid: true };
}

interface TeamMember {
  name: string;
  usn: string;
}

interface RegistrationData {
  teamName: string;
  teamLead: TeamMember;
  teammate2: TeamMember;
  teammate3?: TeamMember;
  teammate4?: TeamMember;
  registeredAt: Date;
}

export async function POST(request: NextRequest) {
  let client: MongoClient | null = null;
  
  try {
    const body = await request.json();
    
    const {
      teamName,
      teamLeadName,
      teamLeadUSN,
      teammate2Name,
      teammate2USN,
      teammate3Name,
      teammate3USN,
      teammate4Name,
      teammate4USN,
    } = body;
    
    if (!teamName || !teamName.trim()) {
      return NextResponse.json({ success: false, error: 'Team name is required' }, { status: 400 });
    }
    
    if (!teamLeadName || !teamLeadName.trim()) {
      return NextResponse.json({ success: false, error: 'Team lead name is required' }, { status: 400 });
    }
    
    if (!teamLeadUSN || !teamLeadUSN.trim()) {
      return NextResponse.json({ success: false, error: 'Team lead USN is required' }, { status: 400 });
    }
    
    if (!teammate2Name || !teammate2Name.trim()) {
      return NextResponse.json({ success: false, error: 'Teammate 2 name is required' }, { status: 400 });
    }
    
    if (!teammate2USN || !teammate2USN.trim()) {
      return NextResponse.json({ success: false, error: 'Teammate 2 USN is required' }, { status: 400 });
    }
    
    const usnValidations = [
      { usn: teamLeadUSN, label: 'Team Lead USN' },
      { usn: teammate2USN, label: 'Teammate 2 USN' },
      { usn: teammate3USN, label: 'Teammate 3 USN' },
      { usn: teammate4USN, label: 'Teammate 4 USN' },
    ];
    
    for (const { usn, label } of usnValidations) {
      if (usn && usn.trim()) {
        const validation = validateUSN(usn);
        if (!validation.valid) {
          return NextResponse.json({ success: false, error: `${label}: ${validation.error}` }, { status: 400 });
        }
      }
    }
    
    const allUSNs: string[] = [
      teamLeadUSN.trim().toUpperCase(),
      teammate2USN.trim().toUpperCase(),
    ];
    
    if (teammate3USN && teammate3USN.trim()) {
      allUSNs.push(teammate3USN.trim().toUpperCase());
    }
    if (teammate4USN && teammate4USN.trim()) {
      allUSNs.push(teammate4USN.trim().toUpperCase());
    }
    
    const uniqueUSNs = new Set(allUSNs);
    if (uniqueUSNs.size !== allUSNs.length) {
      return NextResponse.json({ success: false, error: 'Duplicate USNs found in team. Each team member must have a unique USN.' }, { status: 400 });
    }
    
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    
    const existingTeam = await collection.findOne({
      teamName: { $regex: new RegExp(`^${teamName.trim()}$`, 'i') }
    });
    
    if (existingTeam) {
      return NextResponse.json({ success: false, error: 'A team with this name already exists. Please choose a different team name.' }, { status: 400 });
    }
    
    const existingUSN = await collection.findOne({
      $or: [
        { 'teamLead.usn': { $in: allUSNs } },
        { 'teammate2.usn': { $in: allUSNs } },
        { 'teammate3.usn': { $in: allUSNs } },
        { 'teammate4.usn': { $in: allUSNs } },
      ]
    });
    
    if (existingUSN) {
      return NextResponse.json({ success: false, error: 'One or more USNs are already registered with another team.' }, { status: 400 });
    }
    
    const registrationData: RegistrationData = {
      teamName: teamName.trim(),
      teamLead: {
        name: teamLeadName.trim(),
        usn: teamLeadUSN.trim().toUpperCase(),
      },
      teammate2: {
        name: teammate2Name.trim(),
        usn: teammate2USN.trim().toUpperCase(),
      },
      registeredAt: new Date(),
    };
    
    if (teammate3Name && teammate3Name.trim() && teammate3USN && teammate3USN.trim()) {
      registrationData.teammate3 = {
        name: teammate3Name.trim(),
        usn: teammate3USN.trim().toUpperCase(),
      };
    }
    
    if (teammate4Name && teammate4Name.trim() && teammate4USN && teammate4USN.trim()) {
      registrationData.teammate4 = {
        name: teammate4Name.trim(),
        usn: teammate4USN.trim().toUpperCase(),
      };
    }
    
    await collection.insertOne(registrationData);
    
    return NextResponse.json({ success: true, message: 'Registration successful!' });
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ success: false, error: 'An error occurred during registration. Please try again.' }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
