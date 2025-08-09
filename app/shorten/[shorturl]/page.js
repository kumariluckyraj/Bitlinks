import clientPromise from "@/app/lib/mongodb"; // Ensure this path is correct
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    console.log(params);
  const shorturl = params.shorturl;  // No need to await here

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url); // Redirect to original URL
  } else {
    const baseUrl =
  process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";

redirect(baseUrl);
 // Redirect to homepage or fallback
  }

  // Unreachable code after redirect (this line will never run)
  // return <div>My Post:{url}</div>
}
