import { MongoClient } from "mongodb";
import slugify from "slugify";
const dataImage = [
  "https://newsdemobucket.s3.ap-southeast-1.amazonaws.com/ai-robot.jpg",
  "https://newsdemobucket.s3.ap-southeast-1.amazonaws.com/beaver.jpg",
  "https://newsdemobucket.s3.ap-southeast-1.amazonaws.com/couple-cooking.jpg",
  "https://newsdemobucket.s3.ap-southeast-1.amazonaws.com/hiking.jpg",
  "https://newsdemobucket.s3.ap-southeast-1.amazonaws.com/landscape.jpg",
];

async function insertDummyData() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://canoydaniel06:1F2WauVpOyRMQGCH@nextcoursecluster.xg71o.mongodb.net/?retryWrites=true&w=majority&appName=nextcoursecluster"
    );

    const db = client.db("nextjscourse"); // Make sure the database name is correct
    const newsCollection = db.collection("news");

    // Insert dummy data
    const result = await newsCollection.insertMany([
      {
        title: "Next.js 13 Released",
        data: "Next.js 13 introduces a new App Router and enhanced performance features.",
      },
      {
        title: "React 18 Features",
        data: "React 18 has Concurrent Rendering and automatic batching of updates.",
      },
      {
        title: "JavaScript Trends 2024",
        data: "In 2024, JavaScript remains the most popular language for web development.",
      },
      {
        title: "MongoDB Atlas Benefits",
        data: "MongoDB Atlas is a fully managed cloud database with robust scaling options.",
      },
      {
        title: "TypeScript Popularity",
        data: "TypeScript continues to gain popularity due to its static typing and developer tooling.",
      },
    ]);

    // Log the result
    console.log(`${result.insertedCount} documents were inserted`);

    // Close the client
    await client.close();
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
}

export async function getAllData() {
  const client = await MongoClient.connect(
    "mongodb+srv://canoydaniel06:1F2WauVpOyRMQGCH@nextcoursecluster.xg71o.mongodb.net/?retryWrites=true&w=majority&appName=nextcoursecluster"
  );

  const db = client.db("nextjscourse");
  const newsCollection = db.collection("news");

  const result = await newsCollection.find({}).toArray();

  await client.close();

  const newResult = result.map((news, index) => ({
    id: news._id.toString(),
    slug: slugify(news.title.trim().toLowerCase()),
    title: news.title,
    description: news.data,
    image: dataImage[index],
  }));

  return newResult;
}
