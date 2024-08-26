import Link from "next/link";

export default async function Home() {

  const data = await fetch("https://swapi.dev/api/people/?format=json").then((res) => res.json());

  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-8 p-24">
      <h1 className="text-6xl font-bold ">Main Page</h1>
        {data.results.map((item: any) => {
            return <Link key={item.url} href={`/person/${item.url.match(/\/people\/(\d+)\//)[1]}`} prefetch={true}>Link to Subpage {item.name}</Link>;
        })}
    </main>
  );
}
