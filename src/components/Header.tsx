import Link from "next/link";
import { useRouter } from "next/router";
import { CaretDoubleLeft } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    const router = useRouter()

    return (
        <header className="w-full py-2 flex items-center bg-gray-700 border-b border-gray-600 mb-1">

            <span onClick={() => router.back()}>
                <CaretDoubleLeft size={42} color="#c4ab08" />
            </span>

            <Link href="/">
                <a className="absolute  left-1/2 transform -translate-x-1/2 "> <Logo /> </a>
            </Link>
        </header>
    )
}