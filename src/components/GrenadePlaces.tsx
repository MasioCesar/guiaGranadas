import { useState } from "react"
import { GrenadePlaceModel } from "../models/GrenadePlace"
import { GrenadePlace } from "./GrenadePlace"
import { GrenadeCard } from "./GrenadesCard"

type GrenadePlacesProps = {
  places: GrenadePlaceModel[]
}

export function GrenadePlaces({ places }: GrenadePlacesProps) {

  const [hidden, setHidden] = useState<boolean>(true)
  const [gifSrc, setGifSrc] = useState<string>()

  const show = () => {
    setHidden(false)
  }
  return (
    <>
      <div className="flex justify-center">
      <GrenadePlace gifSrc={gifSrc} hidden={hidden} setHidden={setHidden}/>
        <div className="grid p-2 grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl">

          {
            places.map((p) => (
              <GrenadeCard show={show} setGifSrc={setGifSrc} grenadePlace={p} key={p.name} />
            ))
          }
        </div>

      </div>

    </>
  )
}