import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { error } from "console";

const uri = "mongodb://localhost:27017/Cryptos";
const client = new MongoClient(uri);

export async function GET(req: NextRequest) {
  const symbol = req.nextUrl.searchParams.get("symbol");

  if (!symbol) {
    return NextResponse.json({ error: "Code is required" });
  }

  try {
    await client.connect();
    const database = client.db("Cryptos");
    const collection = database.collection(symbol);
    const result = await collection
      .find()
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  } finally {
    await client.close();
  }
}
