import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;
const collectionName = process.env.MONGODB_COLLECTION!;

export async function GET() {
  let client: MongoClient | null = null;

  try {
    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Get total teams count
    const totalTeams = await collection.countDocuments();

    // Calculate total participants by aggregating member counts
    const participantsAggregation = await collection.aggregate([
      {
        $project: {
          memberCount: {
            $add: [
              // Team lead always counts as 1
              1,
              // Teammate 2 always counts as 1 (required)
              1,
              // Teammate 3 counts if name exists
              { $cond: [{ $and: [{ $ne: ["$teammate3Name", ""] }, { $ne: ["$teammate3Name", null] }] }, 1, 0] },
              // Teammate 4 counts if name exists
              { $cond: [{ $and: [{ $ne: ["$teammate4Name", ""] }, { $ne: ["$teammate4Name", null] }] }, 1, 0] }
            ]
          }
        }
      },
      {
        $group: {
          _id: null,
          totalParticipants: { $sum: "$memberCount" }
        }
      }
    ]).toArray();

    const totalParticipants = participantsAggregation.length > 0 
      ? participantsAggregation[0].totalParticipants 
      : 0;

    // Get all team names
    const teamsData = await collection.find({}, { 
      projection: { 
        teamName: 1, 
        teamLeadName: 1,
        teammate2Name: 1,
        teammate3Name: 1,
        teammate4Name: 1,
        _id: 0 
      } 
    }).toArray();

    const teamNames = teamsData.map(team => team.teamName);

    return NextResponse.json({
      success: true,
      summary: {
        totalRegistrations: totalTeams,
        totalParticipants: totalParticipants
      },
      database: {
        cluster: "Cluster0",
        name: dbName,
        collection: collectionName,
        description: "wHACKiest 2025 Hackathon Registration Database"
      },
      schema: {
        description: "Each document represents a registered team",
        fields: {
          teamName: "String - Name of the team",
          teamLeadName: "String - Full name of team lead (required)",
          teamLeadUSN: "String - USN of team lead (required, format: 1MSXXYY123)",
          teammate2Name: "String - Full name of teammate 2 (required)",
          teammate2USN: "String - USN of teammate 2 (required)",
          teammate3Name: "String - Full name of teammate 3 (optional)",
          teammate3USN: "String - USN of teammate 3 (optional)",
          teammate4Name: "String - Full name of teammate 4 (optional)",
          teammate4USN: "String - USN of teammate 4 (optional)",
          registeredAt: "Date - Timestamp of registration"
        },
        constraints: {
          minTeamSize: 2,
          maxTeamSize: 4,
          usnFormat: "1MSXXYY123 or 1MSXXYY123-T (for transfer students)"
        }
      },
      registeredTeams: teamNames
    });

  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to fetch stats" 
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}
