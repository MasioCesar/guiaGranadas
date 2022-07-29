import { MapasHeader } from "../../../components/MapasHeader";
import { NavBar } from "../../../components/NavBar";
import { GifPortaB } from "../../../components/Mirage/GifPortaB";



export default function cabecinha() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifPortaB />
            </main>
        </div>
    )
}