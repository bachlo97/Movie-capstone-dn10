import { LogoIcon } from "@/assets";
import { NavLink } from "react-router-dom";

type Props = {};

export function Header({}: Props) {
    return (
        <header className="fixed z-10 w-full bg-[#1b1f26ba] p-5 text-white">
            <div className="container mx-auto flex h-16 justify-between">
                <NavLink to={"/"}>
                    <LogoIcon />
                </NavLink>
                <ul className="hidden items-stretch space-x-3 lg:flex">
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="dark:border- -mb-1 flex items-center border-b-2 px-4 dark:border-violet-600 dark:text-violet-600"
                        >
                            Lịnh chiếu
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="dark:border- -mb-1 flex items-center border-b-2 px-4"
                        >
                            Cụm rạp
                        </a>
                    </li>
                    <li className="flex">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="dark:border- -mb-1 flex items-center border-b-2 px-4"
                        >
                            Tin tức
                        </a>
                    </li>
                </ul>
                <div className="hidden flex-shrink-0 items-center lg:flex">
                    <button className="self-center rounded px-8 py-3">
                        Sign in
                    </button>
                    <button className="self-center rounded px-8 py-3 font-semibold dark:bg-violet-600 dark:text-gray-50">
                        Sign up
                    </button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6 dark:text-gray-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}
