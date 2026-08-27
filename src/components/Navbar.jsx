import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-[#3B2416] px-6 py-4 text-[#F5E6D3] sticky top-0 z-50">

            <div className="mx-auto flex max-w-6xl items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C68B59]">
                        <img
                            src="/logo.svg"
                            alt="Epak ni Tuks"
                            className="h-15 w-15"
                        />
                    </div>

                    <div>
                        <h1 className="font-bold">
                            Epak ni Tuks
                        </h1>

                        <p className="text-xs text-[#C9A98D]">
                            Coffee Shop
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 transition ${isActive
                                ? "border-b-2 border-[#C68B59]"
                                : "hover:bg-[#4D2F20]"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 transition ${isActive
                                ? "border-b-2 border-[#C68B59]"
                                : "hover:bg-[#4D2F20]"
                            }`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 transition ${isActive
                                ? "border-b-2 border-[#C68B59]"
                                : "hover:bg-[#4D2F20]"
                            }`
                        }
                    >
                        Menu
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 transition ${isActive
                                ? "border-b-2 border-[#C68B59]"
                                : "hover:bg-[#4D2F20]"
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                </div>

                {/* Order Button */}
                {/*
                 <button className="rounded-lg bg-[#C68B59] px-5 py-2 font-semibold text-white transition hover:bg-[#A66A3F]">
                    Order Now
                </button>
                */}

            </div>

        </nav>
    );
}

export default Navbar;