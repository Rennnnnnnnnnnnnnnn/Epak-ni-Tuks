import { useState } from "react";

function AddMenuItemModal({ onClose, onAdd }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Coffee");
    const [price, setPrice] = useState("");

    const [shortPrice, setShortPrice] = useState("");
    const [tallPrice, setTallPrice] = useState("");
    const [grandePrice, setGrandePrice] = useState("");

    const [image, setImage] = useState("");
    const [available, setAvailable] = useState(true);
    const isLiquid = ["Coffee", "Drinks", "Teas"].includes(category);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newItem;

        if (isLiquid) {
            newItem = {
                id: Date.now(),
                name,
                description,
                category,
                available,
                image,

                sizes: {
                    Short: Number(shortPrice),
                    Tall: Number(tallPrice),
                    Grande: Number(grandePrice),
                },
            };
        } else {
            newItem = {
                id: Date.now(),
                name,
                description,
                category,
                price: Number(price),
                available,
                image,
            };
        }

        onAdd(newItem);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">

            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-[#FFF9F3] text-[#3B2416] shadow-xl">

                {/* Header */}
                <div className="border-b border-[#D2AD8C] p-6">
                    <h2 className="text-2xl font-bold">
                        Add Menu Item
                    </h2>

                    <p className="mt-1 text-sm text-[#6B4630]">
                        Add a new item to your menu.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>

                    <div className="grid gap-8 p-6 md:grid-cols-2">

                        {/* LEFT */}
                        <div>

                            {/* Image Preview */}
                            <label className="mb-2 block text-sm font-semibold">
                                Menu Image
                            </label>

                            <div className="overflow-hidden rounded-xl border border-[#D2AD8C] bg-[#F5E6D3]">

                                {image ? (
                                    <img
                                        src={image}
                                        alt={name || "Menu preview"}
                                        className="aspect-square w-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                ) : (
                                    <div className="flex aspect-square items-center justify-center text-6xl">
                                        ☕
                                    </div>
                                )}

                            </div>

                            {/* Image URL */}
                            <div className="mt-5">

                                <label className="mb-2 block text-sm font-semibold">
                                    Image URL
                                </label>

                                <input
                                    type="url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                                />

                                <p className="mt-1 text-xs text-[#6B4630]">
                                    Enter a direct link to the menu item's image.
                                </p>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold">
                                    Item Name
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Cappuccino"
                                    required
                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold">
                                    Description
                                </label>

                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe the menu item..."
                                    rows="3"
                                    className="w-full resize-none rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold">
                                    Category
                                </label>

                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                                >
                                    <option value="Coffee">Coffee</option>
                                    <option value="Drinks">Drinks</option>
                                    <option value="Teas">Teas</option>
                                    <option value="Meals">Meals</option>
                                    <option value="Sandwiches">Sandwiches</option>
                                    <option value="Pastries">Pastries</option>
                                    <option value="Desserts">Desserts</option>
                                </select>
                            </div>

                            {/* Prices */}
                            {isLiquid ? (
                                <div>
                                    <label className="mb-3 block text-sm font-semibold">
                                        Sizes & Prices
                                    </label>

                                    <div className="space-y-3">

                                        {/* Small */}
                                        <div className="flex items-center gap-4">
                                            <label className="w-20 text-sm font-semibold">
                                                Short
                                            </label>

                                            <div className="relative flex-1">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B4630]">
                                                    ₱
                                                </span>

                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={shortPrice}
                                                    onChange={(e) => setShortPrice(e.target.value)}
                                                    placeholder="Enter price"
                                                    required
                                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                                />
                                            </div>
                                        </div>

                                        {/* Tall */}
                                        <div className="flex items-center gap-4">
                                            <label className="w-20 text-sm font-semibold">
                                                Tall
                                            </label>

                                            <div className="relative flex-1">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B4630]">
                                                    ₱
                                                </span>

                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={tallPrice}
                                                    onChange={(e) => setTallPrice(e.target.value)}
                                                    placeholder="Enter price"
                                                    required
                                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                                />
                                            </div>
                                        </div>

                                        {/* Grande */}
                                        <div className="flex items-center gap-4">
                                            <label className="w-20 text-sm font-semibold">
                                                Grande
                                            </label>

                                            <div className="relative flex-1">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B4630]">
                                                    ₱
                                                </span>

                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={grandePrice}
                                                    onChange={(e) => setGrandePrice(e.target.value)}
                                                    placeholder="Enter price"
                                                    required
                                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="100"
                                        required
                                        className="w-full rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                                    />
                                </div>
                            )}

                            {/* Availability */}
                            <label className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={available}
                                    onChange={(e) => setAvailable(e.target.checked)}
                                    className="h-5 w-5 accent-[#6B4630]"
                                />

                                <span className="font-semibold">
                                    Available
                                </span>
                            </label>

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 border-t border-[#D2AD8C] p-6">

                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer rounded-lg border border-[#D2AD8C] px-5 py-3 font-semibold text-[#6B4630] hover:bg-[#E4CCB5]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-[#6B4630] px-5 py-3 font-semibold text-[#F5E6D3] hover:bg-[#4D2F20]"
                        >
                            Add Item
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}

export default AddMenuItemModal;