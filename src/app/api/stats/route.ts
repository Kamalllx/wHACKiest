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
            2, // teamLead and teammate2 are always present
            { $cond: [{ $ifNull: ["$teammate3.name", false] }, 1, 0] },
            { $cond: [{ $ifNull: ["$teammate4.name", false] }, 1, 0] }
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

  const countByYear = await collection.aggregate([
    {
      $project: {
        members: [
          "$teamLead.usn",
          "$teammate2.usn",
          "$teammate3.usn",
          "$teammate4.usn"
        ]
      }
    },
    { $unwind: "$members" }, // explode into separate docs
    {
      $match: {
        members: { $ne: null }
      }
    },
    {
      $project: {
        year: { $substr: ["$members", 3, 2] } // extract "23", "24", "25"
      }
    },
    {
      $group: {
        _id: "$year",
        count: { $sum: 1 }
      }
    }
  ]).toArray();


  const totalParticipants = participantsAggregation?.[0]?.totalParticipants ?? 0;


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
        totalParticipants: totalParticipants,
        noOfParticipantsByYear: countByYear.reduce((acc, curr) => {
          acc[curr._id] = curr.count;
          return acc;
        }, {} as Record<string, number>)
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
