import { CaretDoubleLeft } from "phosphor-react"
import { Logo } from "./Logo";

export function MapasHeader() {
    return(
        <header className="w-full py-2 flex items-center justify-center bg-gray-700">
            <a href="../../" className="w-full px-2 py-1 flex justify-start">
                <CaretDoubleLeft size={42} color="#c4ab08"/>
            </a>
            <a href="../../" className="w-full flex justify-center absolute">
                <Logo />
            </a>
        </header>
    )
}