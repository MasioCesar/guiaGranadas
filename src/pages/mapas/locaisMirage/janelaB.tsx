import { MapasHeader } from "../../../components/MapasHeader";
import { NavBar } from "../../../components/NavBar";
import { GifJanelaB } from "../../../components/Mirage/GifJanelaB";



export default function janelaB() {
    return(
        <div>
            <MapasHeader />
            <main>
                <NavBar />
                <GifJanelaB />

            </main>
        </div>
    )
}