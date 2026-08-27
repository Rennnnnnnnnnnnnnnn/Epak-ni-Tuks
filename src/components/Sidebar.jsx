import { NavLink } from "react-router-dom";

function Sidebar() {
    const navClass = ({ isActive }) =>
        `rounded-lg px-4 py-3 transition ${isActive
            ? "bg-[#6B4630] font-medium"
            : "hover:bg-[#4D2F20]"
        }`;

    return (
        <aside className="flex min-h-screen w-64 flex-col bg-[#3B2416] p-4 text-[#F5E6D3]">

            {/* Logo / Shop Name */}
            <div className="mb-8 border-b border-[#6B4630] pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C68B59] text-xl">
                        ☕
                    </div>

                    <div>
                        <h1 className="text-lg font-bold">
                            Epak ni Tuks
                        </h1>

                        <p className="text-xs text-[#C9A98D]">
                            Coffee Shop
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">

                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[#A98265]">
                    Main
                </p>

                <NavLink
                    to="/admin/dashboard"
                    className={navClass}
                >
                    📈 Dashboard
                </NavLink>

                <NavLink
                    to="/admin/menu"
                    className={navClass}
                >
                    📋 Menu
                </NavLink>


                <NavLink
                    to="/admin/orders"
                    className={navClass}
                >
                    🧾 Orders
                </NavLink>


                <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-[#A98265]">
                    Management
                </p>

                <NavLink
                    to="/admin/sales"
                    className={navClass}
                >
                    📊 Sales
                </NavLink>
            </nav>

            {/* Bottom */}
            <div className="mt-auto border-t border-[#6B4630] pt-4">
                <button
                    className="mt-2 w-full rounded-lg px-4 py-3 text-left text-[#E8A08A] transition hover:bg-[#4D2F20]"
                >
                    ⇥ Logout
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;