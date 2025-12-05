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
    const collection = db.collection("questions");

    const questions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: questions,
    });
  } catch (error) {
    console.error("Questions GET error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch questions" },
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
    const { question, askedBy } = body;

    if (!question) {
      return NextResponse.json(
        { success: false, error: "Question is required" },
        { status: 400 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("questions");

    const questionDoc = {
      question,
      askedBy: askedBy || "Anonymous",
      answer: null,
      answeredAt: null,
      isAnswered: false,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(questionDoc);

    return NextResponse.json({
      success: true,
      data: { ...questionDoc, _id: result.insertedId },
    });
  } catch (error) {
    console.error("Questions POST error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit question" },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
}

export async function PUT(request: NextRequest) {
  let client: MongoClient | null = null;

  try {
    const body = await request.json();
    const { id, pin, answer } = body;

    if (pin !== process.env.QA_ADMIN_PIN) {
      return NextResponse.json(
        { success: false, error: "Invalid admin pin" },
        { status: 401 }
      );
    }

    if (!id || !answer) {
      return NextResponse.json(
        { success: false, error: "Question ID and answer are required" },
        { status: 400 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("questions");

    await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          answer,
          isAnswered: true,
          answeredAt: new Date(),
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Questions PUT error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to answer question" },
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

    if (pin !== process.env.QA_ADMIN_PIN) {
      return NextResponse.json(
        { success: false, error: "Invalid admin pin" },
        { status: 401 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Question ID required" },
        { status: 400 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("questions");

    await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Questions DELETE error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete question" },
      { status: 500 }
    );
  } finally {
    if (client) await client.close();
  }
}
