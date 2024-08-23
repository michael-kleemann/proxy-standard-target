
type PageProps = Readonly<{
    params: { subpageId: string };
}>;

export default async function Page({
  params: { subpageId },
}: PageProps) {
    return (
        <main className="flex min-h-screen items-center justify-center p-24">
            <h1 className="text-6xl font-bold ">Subpage with id {subpageId}</h1>
        </main>
    );
}