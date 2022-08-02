import { Maps } from "../components/Maps";
import { MapModel } from "../models/Map"
import MapsData from "../data/maps.json"

type HomeProps = {
    maps: MapModel[]
}


export default function Home({ maps }: HomeProps) {
    return (

        <Maps maps={maps} />

    )
}


export async function getStaticProps() {
    const maps: MapModel[] = MapsData

    return maps ? { props: { maps: maps } } : { notFound: true };
}