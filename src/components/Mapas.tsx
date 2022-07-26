import Link from "next/link";

export function Mapas() {
    return(
        <div className="flex-1">
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-10 max-w-6xl">
                    <Link href="/mapas/mirage">
                         <img className="mt-10 rounded-xl border border-yellow-200" src="/images/mapas/mirage.png"/>
                    </Link>
                    <Link href="/mapas/inferno">
                    <a href=""> <img className="mt-10 rounded-xl border border-yellow-200" src="/images/mapas/inferno.png"/> </a>
                    </Link>
                    <a href=""> <img className="mt-10 rounded-xl border border-yellow-200" src="/images/mapas/overpass.png"/> </a>
                    <a href=""> <img className="rounded-xl border border-yellow-200" src="/images/mapas/nuke.png"/> </a>
                    <a href=""> <img className="rounded-xl border border-yellow-200" src="/images/mapas/vertigo.png"/> </a>
                    <a href=""> <img className="rounded-xl border border-yellow-200" src="/images/mapas/dust.png"/> </a>
                    <a href=""> <img className="mb-10 rounded-xl border border-yellow-200" src="/images/mapas/ancient.png"/> </a>
                </div>

                <div className="flex items-stretch gap-10">
                    
                </div>
                


            </div>
        </div>
    )
}