import { MapasHeader } from "../../../components/MapasHeader";
import { NavBar } from "../../../components/NavBar";
import { GifJanelaMeio } from "../../../components/Mirage/GifJanelaMeio";



export default function cabecinha() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifJanelaMeio />

            </main>
        </div>
    )
}