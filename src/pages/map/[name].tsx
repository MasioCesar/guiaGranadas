import { MapPlaces } from "../../models/MapPlaces"
import { MapModel } from "../../models/Map"
import MapsPlaces from "../../data/maps_places.json"
import Maps from "../../data/maps.json"
import { GrenadePlaces } from "../../components/GrenadePlaces"

type MapProps = {
  mapPlaces: MapPlaces
}

type StaticProps = {
  params: {
    name: "string"
  }
}

export default function Map({ mapPlaces }: MapProps) {
  return (
    <>
      {/* <MapTopBar names={mapPlaces.grenadePlaces.map((g) => g.name)} setPlace={setPlace} /> */}

      <GrenadePlaces places={mapPlaces.grenadePlaces} />
    </>
  )

}


export async function getStaticPaths() {
  const maps: MapModel[] = Maps
  const paths = maps.map((m) => (
    {
      params: {
        name: m.name
      }
    }
  ))


  return { paths, fallback: false }
}


export async function getStaticProps({ params }: StaticProps) {
  const mapsPlaces: MapPlaces[] = MapsPlaces
  const mapPlaces = mapsPlaces.filter((m) => m.name === params.name)[0]
  return mapPlaces ? { props: { mapPlaces: mapPlaces } } : { notFound: true };
}