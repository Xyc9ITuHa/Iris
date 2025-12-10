import CanvasTest from "@/app/components/modules/canvas_testing/CanvasTest";

export default async function LaserPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    async function fetchLaserData(id: string) {
        const base = process.env.NEXT_PUBLIC_BASE_URL!;
        const response = await fetch(`${base}/api/lasers/${id}`);
        return response.json();
    }


    const data = await fetchLaserData(id);

    return <div>
        <h1>Laser Page for ID: {id}</h1>
        <p>{data?.manufacturer.name}</p>
        <CanvasTest laser={data} />
        {data?.manufacturer.website &&
            <a href={`${data?.manufacturer.website}`}>website</a>
        }
        {data?.manufacturer.country &&
            <p>country: {data?.manufacturer.country}</p>
        }
        <h2>Laser data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>;
}