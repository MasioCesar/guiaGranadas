import { MapasHeader } from "../../../components/MapasHeader";
import { NavBar } from "../../../components/NavBar";
import { GifLiga } from "../../../components/Mirage/GifLiga";



export default function cabecinha() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifLiga />

            </main>
        </div>
    )
}