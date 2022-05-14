import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Next.js is a React Framework" />
      </Head>
      <Header title="Home Page" />
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
