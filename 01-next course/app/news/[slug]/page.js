"use-client";

import { getAllData } from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function NewsDetails({ params }) {
  const { slug } = params;

  const data = await getAllData();

  const selectedNews = data.find((data) => data.slug === slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={selectedNews.image} />
        <h1>{selectedNews.title}</h1>
      </header>
      <p>{selectedNews.description}</p>
    </article>
  );
}
