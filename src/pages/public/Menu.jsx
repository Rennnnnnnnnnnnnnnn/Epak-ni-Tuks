import { useState, useRef } from "react";
import menuData from "../../data/menuData";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Menu() {
    const categories = [
        { name: "Coffee", icon: "☕" },
        { name: "Drinks", icon: "🥤" },
        { name: "Teas", icon: "🍵" },
        { name: "Meals", icon: "🍽️" },
        { name: "Sandwiches", icon: "🥪" },
        { name: "Pastries", icon: "🥐" },
        { name: "Desserts", icon: "🍰" },
    ];

    const [menuItems] = useState(() => {
        const savedMenu = localStorage.getItem("menuData");

        return savedMenu
            ? JSON.parse(savedMenu)
            : menuData;
    });

    const [expandedItem, setExpandedItem] = useState(null);

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleSizes = (id) => {
        setExpandedItem((current) =>
            current === id ? null : id
        );
    };

    return (
        <div className="min-h-screen bg-[#F5E6D3] px-6 py-16 text-[#3B2416]">

            <audio
                ref={audioRef}
                  src="/pagkakasarap.mp3"
                onEnded={() => setIsPlaying(false)}
            />

            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                    Epak ni Tuks
                </p>

                <h1 className="text-5xl font-bold">
                    Our Menu
                </h1>

                <p className="mt-4 text-[#6B4630]">
                    Freshly prepared drinks and treats made for your day.
                </p>

                <p className="mt-3 text-2xl font-bold text-[#6B4630]">
                    Lahat masarap,{" "}
                    <span className="font-extrabold">
                        SOBRA
                    </span>

                    <button
                        onClick={toggleMusic}
                        className="ml-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#6B4630] text-[#F5E6D3] transition hover:bg-[#4D2F20] animate-bounce"
                        aria-label={isPlaying ? "Pause music" : "Play music"}
                    >
                        {isPlaying
                            ? <PauseIcon />
                            : <PlayArrowIcon />
                        }
                    </button>
                </p>
            </div>

            {/* Categories */}
            <div className="mx-auto mt-16 max-w-5xl space-y-16">

                {categories.map((category) => {

                    const items = menuItems.filter(
                        (item) =>
                            item.category === category.name
                    );

                    if (items.length === 0) {
                        return null;
                    }

                    return (
                        <section key={category.name}>

                            {/* Category Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold">
                                    {category.icon} {category.name}
                                </h2>

                                <div className="mt-2 h-1 w-12 rounded bg-[#C68B59]" />
                            </div>

                            {/* Items */}
                            <div className="grid items-start gap-5 sm:grid-cols-2">

                                {items.map((item) => {

                                    const isExpanded =
                                        expandedItem === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            className="overflow-hidden rounded-xl bg-[#FFF9F3] shadow-md"
                                        >

                                            {/* Image */}
                                            <div className="relative">

                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-48 w-full object-cover transition hover:scale-105"
                                                />

                                                {!item.available && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                                        <span className="rounded-lg px-4 py-2 text-lg font-bold text-white">
                                                            Unavailable
                                                        </span>
                                                    </div>
                                                )}

                                            </div>

                                            {/* Information */}
                                            <div className="p-5">

                                                <div className="flex justify-between gap-4">

                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            {item.name}
                                                        </h3>

                                                        <p className="mt-1 text-sm text-[#6B4630]">
                                                            {item.description}
                                                        </p>
                                                    </div>

                                                    {/* Non-liquid price */}
                                                    {!item.sizes && (
                                                        <span className="whitespace-nowrap font-bold text-[#A66A3F]">
                                                            ₱{item.price}
                                                        </span>
                                                    )}

                                                    {/* Liquid dropdown */}
                                                    {item.sizes && (
                                                        <button
                                                            onClick={() =>
                                                                toggleSizes(item.id)
                                                            }
                                                            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6B4630] transition hover:bg-[#F5E6D3]"
                                                            aria-label={
                                                                isExpanded
                                                                    ? "Hide sizes"
                                                                    : "Show sizes"
                                                            }
                                                        >
                                                            <KeyboardArrowDownIcon
                                                                className={`transition-transform duration-200 ${isExpanded
                                                                        ? "rotate-180"
                                                                        : ""
                                                                    }`}
                                                            />
                                                        </button>
                                                    )}

                                                </div>

                                                {/* Sizes */}
                                                {item.sizes && isExpanded && (
                                                    <div className="mt-4 border-t border-[#D2AD8C] pt-4">

                                                        <div className="space-y-2">

                                                            {Object.entries(
                                                                item.sizes
                                                            ).map(
                                                                ([size, price]) => (
                                                                    <div
                                                                        key={size}
                                                                        className="flex items-center justify-between rounded-lg bg-[#F5E6D3] px-4 py-2"
                                                                    >
                                                                        <span className="font-semibold">
                                                                            {size}
                                                                        </span>

                                                                        <span className="font-bold text-[#A66A3F]">
                                                                            ₱{price}
                                                                        </span>
                                                                    </div>
                                                                )
                                                            )}

                                                        </div>

                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>
                        </section>
                    );
                })}

            </div>
        </div>
    );
}

export default Menu;