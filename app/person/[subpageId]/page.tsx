
type PageProps = Readonly<{
    params: { subpageId: string };
}>;

export default async function Page({
  params: { subpageId },
}: PageProps) {

    let data = {name: subpageId};

    try {
        data = await fetch(`https://swapi.dev/api/people/${subpageId}/?format=json`).then((res) => res.json());
    } catch (error) {
        console.error(error);
    }

    return (
        <main className="flex min-h-screen items-center justify-center p-24">
            <h1 className="text-6xl font-bold ">Subpage of {data.name}</h1>
        </main>
    );
}