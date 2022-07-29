import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
    return(
        <header className="w-full py-2 flex items-center justify-center bg-gray-700 border-b border-gray-600 mb-8">
            <Link href="../">
                <a> <Logo /> </a>
            </Link>
        </header>
    )
}