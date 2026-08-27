import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function PublicLayout() {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                setShowNavbar(false);
            } else {
                // Scrolling up
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen">
            <div
                className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${showNavbar
                        ? "translate-y-0"
                        : "-translate-y-full"
                    }`}
            >
                <Navbar />
            </div>

            <main className="pt-18">
                <Outlet />
            </main>
        </div>
    );
}

export default PublicLayout;