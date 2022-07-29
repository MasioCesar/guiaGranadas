import { MapasHeader } from "../../../components/MapasHeader";
import { NavBar } from "../../../components/NavBar";
import { GifMeioAlto } from "../../../components/Mirage/GifMeioAlto";



export default function cabecinha() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifMeioAlto />
            </main>
        </div>
    )
}