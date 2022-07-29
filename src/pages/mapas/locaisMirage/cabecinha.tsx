import { MapasHeader } from "../../../components/MapasHeader";
import { GifCabecinha } from "../../../components/Mirage/GifCabecinha";
import { NavBar } from "../../../components/NavBar";

export default function cabecinha() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifCabecinha />
            </main>
        </div>
    )
}