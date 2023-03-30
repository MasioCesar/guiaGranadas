import { Maps } from "../components/Maps";
import { MapModel } from "../models/Map"
import MapsData from "../data/maps.json"

type HomeProps = {
    maps: MapModel[]
}


export default function Home({ maps }: HomeProps) {
    return (
        <div className="flex-1">
            <div className="ml-64">
                <Maps maps={maps} />
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const maps: MapModel[] = MapsData

    return maps ? { props: { maps: maps } } : { notFound: true };
}