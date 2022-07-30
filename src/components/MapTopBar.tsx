type MapTopBarProps = {
    names: string[]
    setPlace: (name: string) => void
}

export function MapTopBar({names, setPlace} : MapTopBarProps) {
    return(
        <div className="w-full flex items-center justify-center bg-gray-700 border border-gray-600 gap-6 mb-8 p-2">
            {
                names.map((name) => (
                    <a className="p-2 border border-gray-600 text-amber-300 flex justify-center w-[122px] relative" onClick={() => {setPlace(name)}}>{name}</a>
                ))
            }
     
        </div>
    )
}