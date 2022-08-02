import Link from "next/link";
import { MapModel } from "../models/Map"



type MapsProps = {
    maps: MapModel[]
}

export function Maps({ maps }: MapsProps) {
    return (
        
            <div className="flex justify-center">
                <div className="grid px-2 grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
                    {
                        maps.map((m) => (
                            <Link href={`/map/${m.name}`} key={m.name}>
                                <abbr title={m.name}> <img className="rounded-xl border border-yellow-200" src={m.imageSrc} alt={m.name} /> </abbr>
                            </Link>
                        ))
                    }

                </div>

            </div>
      
    )
}


