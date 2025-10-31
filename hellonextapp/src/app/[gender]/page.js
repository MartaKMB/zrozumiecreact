export default async function DynamicRoot({params}) {
    const {gender} = await params;
    return <h2>{gender}</h2>;
}
