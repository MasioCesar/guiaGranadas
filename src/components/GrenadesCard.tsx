import { GrenadePlaceModel } from "../models/GrenadePlace"

type GrenadeCardProps = {
  grenadePlace: GrenadePlaceModel
  setGifSrc: (value: string | ((prevVar: string | undefined) => string)) => void;
  show: () => void
}


export function GrenadeCard({ grenadePlace, setGifSrc, show }: GrenadeCardProps) {

  return (
    <>
      <abbr title={grenadePlace.name}>
        <img
          className="rounded-xl border border-yellow-200"
          src={grenadePlace.imageSrc}
          alt={grenadePlace.name}
          onClick={() => {
            setGifSrc(grenadePlace.gifSrc)
            show()
          }} /> </abbr>
    </>
  )
}