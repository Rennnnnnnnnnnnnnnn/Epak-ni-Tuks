import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroData from "../../data/heroData";


function Home() {
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("next");

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection("next");

            setCurrentSlide((prev) =>
                prev === heroData.length - 1 ? 0 : prev + 1
            );
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setDirection("next");

        setCurrentSlide((prev) =>
            prev === heroData.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        setDirection("previous");

        setCurrentSlide((prev) =>
            prev === 0 ? heroData.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-[#F5E6D3] text-[#3B2416]">
            {/* Hero */}
            <section className="flex min-h-[100vh] items-center px-6">
                <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <p className=" text-md font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                            Your Daily Cup of Comfort.
                        </p>

                        <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
                            Epak ni Tuks
                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#6B4630]">
                            Freshly brewed coffee, delicious food, and a cozy
                            place to relax. Whether you're starting your day
                            or taking a break, we've got a cup waiting for you.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() => navigate("/menu")}
                                className="rounded-lg bg-[#6B4630] px-6 py-3 font-semibold text-[#F5E6D3] transition hover:bg-[#4D2F20] cursor-pointer"
                            >
                                View Menu
                            </button>

                            <button
                                onClick={() => navigate("/about")}
                                className="rounded-lg border border-[#6B4630] px-6 py-3 font-semibold text-[#6B4630] transition hover:bg-[#E4CCB5] cursor-pointer">
                                About Us
                            </button>
                        </div>
                    </div>

                    {/* Image placeholder */}
                    <div className="flex items-center justify-center rounded-4xl bg-[#D2AD8C] p-3">
                        <img
                            src="https://img.craiyon.com/2026-08-26/o9eMEv8tQfKNIANO9W87wg.webp"
                            alt="Epak ni Tuks"
                            className="h-full w-full rounded-3xl object-contain"
                        />
                    </div>
                </div>
            </section>
            {/* CAROUSEL */}
            <div className="relative overflow-hidden rounded-4xl bg-[#D2AD8C] p-3 h-165">
                <div className="relative h-[600px] overflow-hidden rounded-3xl">
                    <img
                        key={currentSlide}
                        src={heroData[currentSlide].image}
                        alt="Epak ni Tuks"
                        className={`absolute inset-0 h-full w-full object-cover ${direction === "next"
                            ? "animate-slide-in-right"
                            : "animate-slide-in-left"
                            }`}
                    />

                </div>

                {/* Previous */}
                <button
                    onClick={previousSlide}
                    className="absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#3B2416]/70 text-xl text-white"
                >
                    ‹
                </button>

                {/* Next */}
                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#3B2416]/70 text-xl text-white"
                >
                    ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                    {heroData.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setDirection(
                                    index > currentSlide
                                        ? "next"
                                        : "previous"
                                );
                                setCurrentSlide(index);
                            }}
                            className={`h-2.5 rounded-full ${currentSlide === index
                                ? "w-8 bg-[#F5E6D3]"
                                : "w-2.5 bg-[#F5E6D3]/60"
                                }`}
                        />
                    ))}
                </div>

            </div>


            {/* Featured */}
            <section className="bg-white/40 px-6 py-16">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A66A3F]">
                            Customer Favorites
                        </p>

                        <h2 className="mt-2 text-3xl font-bold">
                            Something for Everyone
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">

                        <div className="rounded-2xl bg-[#FFF9F3] p-6 text-center shadow-sm">
                            <div className="text-5xl">☕</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Signature Coffee
                            </h3>

                            <p className="mt-2 text-[#6B4630]">
                                Smooth, rich, and freshly brewed.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#FFF9F3] p-6 text-center shadow-sm">
                            <div className="text-5xl">🥐</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Fresh Pastries
                            </h3>

                            <p className="mt-2 text-[#6B4630]">
                                The perfect companion to your coffee.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#FFF9F3] p-6 text-center shadow-sm">
                            <div className="text-5xl">🍰</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Sweet Treats
                            </h3>

                            <p className="mt-2 text-[#6B4630]">
                                A little something for your sweet tooth.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#3B2416] px-6 py-16 text-center text-[#F5E6D3]">
                <h2 className="text-3xl font-bold">
                    Ready for Your Next Coffee?
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-[#C9A98D]">
                    Come visit us and make   Epak ni Tuks part of your day, a part of your life.
                </p>

                <Link
                    to="/menu"
                    className="mt-6 inline-block rounded-lg bg-[#C68B59] px-6 py-3 font-semibold text-white transition hover:bg-[#A66A3F] cursor-pointer"
                >
                    View Our Menu
                </Link>
            </section>

        </div>
    );
}

export default Home;