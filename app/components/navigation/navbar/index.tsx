import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    const pathname = usePathname()

    return (<>
        <div className="w-full h-16 px-4 sm:px-16 bg-white sticky top-0 flex items-center font-[family-name:var(--font-source-sans-pro)] z-50">

            <ul className="absolute left-4 sm:left-16">
                <li>
                    <Link href="/" className="text-xl sm:text-xl text-normal text-emerald-900 font-bold">CURRIE LAB</Link>
                </li>
            </ul>

            <button
                type="button"
                className="inline-flex items-center lg:hidden absolute right-4"
                onClick={toggle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#233876"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                    />
                </svg>
            </button>

            <ul className="hidden lg:flex items-center justify-center mx-auto gap-x-12 text-sky-900 text-lg font-base uppercase">
                <li>
                    <Link href="/" className={`link ${pathname === '/' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-500`}>About</Link>
                </li>
                <li>
                    <Link href="/people" className={`link ${pathname === '/people' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-500`}>People</Link>
                </li>
                <li>
                    <Link href="/publications" className={`link ${pathname === '/publications' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-500`}>Publications</Link>
                </li>
                <li>
                    <Link href="/gallery" className={`link ${pathname === '/gallery' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-500`}>Gallery</Link>
                </li>
                <li>
                    <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-500`}>Get in touch</Link>
                </li>
            </ul>
        </div>
    </>
    );
};

export default Navbar;