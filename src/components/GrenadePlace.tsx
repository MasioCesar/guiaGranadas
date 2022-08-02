
type GrenadePlaceProps = {
  setHidden: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  hidden: boolean
  gifSrc: string | undefined
}

export function GrenadePlace({ gifSrc, hidden, setHidden }: GrenadePlaceProps) {

  return (
    <>

      <div className={`fixed ${hidden ? "hidden" : ""} inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}>
        <div className="relative top-20 mx-auto p-5 w-4/6">

          <div
            className="absolute top-5 right-6"
            onClick={ () => setHidden(true)}
          >
            <button>x</button>
          </div>
 
          <picture><img className="rounded-lg pb-10" src={gifSrc} alt="" /> </picture>

        </div>

      </div>


    </>
  )
}

