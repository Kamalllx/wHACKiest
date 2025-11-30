import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// ✅ Load env variables
const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;
const collectionName = process.env.MONGODB_COLLECTION!;

// ✅ USN validation regex
const USN_REGEX = /^1MS\d{2}[A-Z]{2}\d{3}(-T)?$/i;

function validateUSN(usn: string): { valid: boolean; error?: string } {
  if (!usn) return { valid: true };

  const trimmedUSN = usn.trim().toUpperCase();

  if (trimmedUSN.length !== 10 && trimmedUSN.length !== 12) {
    return {
      valid: false,
      error: `USN must be 10 or 12 characters. Got ${trimmedUSN.length} characters.`,
    };
  }

  if (!USN_REGEX.test(trimmedUSN)) {
    return {
      valid: false,
      error: `Invalid USN format. Expected: 1MSXXYY123 or 1MSXXYY123-T`,
    };
  }

  return { valid: true };
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

    // ---------- REQUIRED FIELD CHECKS ----------
    if (!teamName?.trim())
      return NextResponse.json(
        { success: false, error: "Team name is required" },
        { status: 400 }
      );

    if (!teamLeadName?.trim())
      return NextResponse.json(
        { success: false, error: "Team lead name is required" },
        { status: 400 }
      );

    if (!teamLeadUSN?.trim())
      return NextResponse.json(
        { success: false, error: "Team lead USN is required" },
        { status: 400 }
      );

    if (!teammate2Name?.trim())
      return NextResponse.json(
        { success: false, error: "Teammate 2 name is required" },
        { status: 400 }
      );

    if (!teammate2USN?.trim())
      return NextResponse.json(
        { success: false, error: "Teammate 2 USN is required" },
        { status: 400 }
      );

    // ---------- USN VALIDATION ----------
    const usnChecks = [
      { usn: teamLeadUSN, field: "Team Lead USN" },
      { usn: teammate2USN, field: "Teammate 2 USN" },
      { usn: teammate3USN, field: "Teammate 3 USN" },
      { usn: teammate4USN, field: "Teammate 4 USN" },
    ];

    for (const { usn, field } of usnChecks) {
      if (usn?.trim()) {
        const validation = validateUSN(usn);
        if (!validation.valid) {
          return NextResponse.json(
            { success: false, error: `${field}: ${validation.error}` },
            { status: 400 }
          );
        }
      }
    }

    // ---------- UNIQUE USN CHECK ----------
    const allUSNs = [
      teamLeadUSN.trim().toUpperCase(),
      teammate2USN.trim().toUpperCase(),
    ];

    if (teammate3USN?.trim())
      allUSNs.push(teammate3USN.trim().toUpperCase());

    if (teammate4USN?.trim())
      allUSNs.push(teammate4USN.trim().toUpperCase());

    if (new Set(allUSNs).size !== allUSNs.length) {
      return NextResponse.json(
        {
          success: false,
          error: "Duplicate USNs found. Each member must have a unique USN.",
        },
        { status: 400 }
      );
    }

    // ---------- DB CONNECTION ----------
    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // ---------- CHECK TEAM NAME ----------
    const existingTeam = await collection.findOne({
      teamName: { $regex: new RegExp(`^${teamName.trim()}$`, "i") },
    });

    if (existingTeam) {
      return NextResponse.json(
        {
          success: false,
          error: "A team with this name already exists. Choose another name.",
        },
        { status: 400 }
      );
    }

    // ---------- CHECK IF ANY USN ALREADY REGISTERED ----------
    const existingUSN = await collection.findOne({
      $or: [
        { "teamLead.usn": { $in: allUSNs } },
        { "teammate2.usn": { $in: allUSNs } },
        { "teammate3.usn": { $in: allUSNs } },
        { "teammate4.usn": { $in: allUSNs } },
      ],
    });

    if (existingUSN) {
      return NextResponse.json(
        {
          success: false,
          error: "One or more USNs are already registered in another team.",
        },
        { status: 400 }
      );
    }

    // ---------- PREPARE DATA ----------
    const data: any = {
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

    if (teammate3Name?.trim() && teammate3USN?.trim()) {
      data.teammate3 = {
        name: teammate3Name.trim(),
        usn: teammate3USN.trim().toUpperCase(),
      };
    }

    if (teammate4Name?.trim() && teammate4USN?.trim()) {
      data.teammate4 = {
        name: teammate4Name.trim(),
        usn: teammate4USN.trim().toUpperCase(),
      };
    }

    // ---------- SAVE ----------
    await collection.insertOne(data);

    return NextResponse.json({
      success: true,
      message: "Registration successful!",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
}
