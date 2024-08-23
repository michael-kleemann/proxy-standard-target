import Link from "next/link";

export default function Home() {

  const randomID = Math.floor(Math.random() * 256);

  return (
    <main className="flex min-h-screen items-center justify-center gap-24 p-24">
      <h1 className="text-6xl font-bold ">Main Page</h1>
      <Link href={`/${randomID}`} prefetch={true}>Link to Subpage {randomID}</Link>
    </main>
  );
}
