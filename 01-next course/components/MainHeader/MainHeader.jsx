import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header id="main-header">
        <h1 className="">React news</h1>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
