import { MongoClient, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;

export async function GET() {
  let client: MongoClient | null = null;

  try {
    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("announcements");

    const announcements = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: announcements,
    });
  } catch (error) {
    console.error("Announcements GET error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch announcements" },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
}

export async function POST(request: NextRequest) {
  let client: MongoClient | null = null;

  try {
    const body = await request.json();
    const { title, content, fileUrl, fileName, pin } = body;

    if (pin !== process.env.ANNOUNCEMENTS_ADMIN_PIN) {
      return NextResponse.json(
        { success: false, error: "Invalid admin pin" },
        { status: 401 }
      );
    }

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: "Title and content are required" },
        { status: 400 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("announcements");

    const announcement = {
      title,
      content,
      fileUrl: fileUrl || null,
      fileName: fileName || null,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(announcement);

    return NextResponse.json({
      success: true,
      data: { ...announcement, _id: result.insertedId },
    });
  } catch (error) {
    console.error("Announcements POST error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create announcement" },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
}

export async function DELETE(request: NextRequest) {
  let client: MongoClient | null = null;

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const pin = searchParams.get("pin");

    if (pin !== process.env.ANNOUNCEMENTS_ADMIN_PIN) {
      return NextResponse.json(
        { success: false, error: "Invalid admin pin" },
        { status: 401 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Announcement ID required" },
        { status: 400 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("announcements");

    await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Announcements DELETE error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete announcement" },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
}
