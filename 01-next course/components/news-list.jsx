import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((item) => (
        <li key={item._id}>
          <Link href={`/news/${item.slug}`}>
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
