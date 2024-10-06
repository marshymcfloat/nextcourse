import { MongoClient } from "mongodb";
import Link from "next/link";
import { getAllData } from "@/lib/mongodb";
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const data = await getAllData();
  return (
    <>
      <h1>News list</h1>

      <NewsList news={data} />
    </>
  );
}
