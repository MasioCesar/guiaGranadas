import { MapasHeader } from "../../../components/MapasHeader";
import { NavBar } from "../../../components/NavBar";
import { GifCt } from "../../../components/Mirage/GifCt";

export default function ct() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifCt />
            </main>
        </div>
    )
}