import { useState } from "react";

function EditMenuItemModal({ item, onClose, onSave }) {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [category, setCategory] = useState(item.category);

    // Single price for non-liquid items
    const [price, setPrice] = useState(item.price ?? "");

    // Sizes for liquids
    const [shortPrice, setShortPrice] = useState(
        item.sizes?.Short ?? ""
    );
    const [tallPrice, setTallPrice] = useState(
        item.sizes?.Tall ?? ""
    );
    const [grandePrice, setGrandePrice] = useState(
        item.sizes?.Grande ?? ""
    );

    const [image, setImage] = useState(item.image || "");
    const [available, setAvailable] = useState(item.available);

    const hasSizes = item.sizes !== undefined;
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedItem = {
            ...item,
            name,
            description,
            category,
            image,
            available,
        };

        if (hasSizes) {
            updatedItem.sizes = {
                Short: Number(shortPrice),
                Tall: Number(tallPrice),
                Grande: Number(grandePrice),
            };

            // Make sure a sized item doesn't retain a normal price
            delete updatedItem.price;
        } else {
            updatedItem.price = Number(price);

            // Make sure a non-sized item doesn't retain sizes
            delete updatedItem.sizes;
        }

        onSave(updatedItem);
        onClose();
    };

    return (
        <div className="fixed backdrop-blur-xs inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="max-h-auto w-full max-w-4xl overflow-y-auto rounded-2xl bg-[#FFF9F3] text-[#3B2416] shadow-xl">

                {/* Header */}
                <div className="border-b border-[#D2AD8C] p-6">
                    <h2 className="text-2xl font-bold">
                        Edit Menu Item
                    </h2>

                    <p className="mt-1 text-sm text-[#6B4630]">
                        Update this menu item.
                    </p>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit}>

                    <div className="grid gap-8 p-6 md:grid-cols-2">

                        {/* LEFT - Image */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Menu Image
                            </label>

                            <div className="overflow-hidden rounded-xl border border-[#D2AD8C] bg-[#F5E6D3]">

                                {image ? (
                                    <img
                                        src={image}
                                        alt={name}
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

                 
                            {/* Image File Upload */}
                            <div className="mt-5">
                                <label className="mb-2 block text-sm font-semibold">
                                    Upload Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                                />

                                <p className="mt-1 text-xs text-[#6B4630]">
                                    Select a JPG, PNG, or other image file.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT - Form Fields */}
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
                                    rows="4"
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

                            {/* PRICES */}
                            {hasSizes ? (
                                /* =========================
                                   LIQUID / SIZED ITEM
                                ========================= */
                                <div>
                                    <label className="mb-3 block text-sm font-semibold">
                                        Prices by Size
                                    </label>

                                    <div className="space-y-3">

                                        {/* Short */}
                                        <div className="flex items-center gap-3">
                                            <label className="w-24 text-sm font-semibold">
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
                                                    onChange={(e) =>
                                                        setShortPrice(e.target.value)
                                                    }
                                                    placeholder="100"
                                                    required
                                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                                />
                                            </div>
                                        </div>

                                        {/* Tall */}
                                        <div className="flex items-center gap-3">
                                            <label className="w-24 text-sm font-semibold">
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
                                                    onChange={(e) =>
                                                        setTallPrice(e.target.value)
                                                    }
                                                    placeholder="120"
                                                    required
                                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                                />
                                            </div>
                                        </div>

                                        {/* Grande */}
                                        <div className="flex items-center gap-3">
                                            <label className="w-24 text-sm font-semibold">
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
                                                    onChange={(e) =>
                                                        setGrandePrice(e.target.value)
                                                    }
                                                    placeholder="140"
                                                    required
                                                    className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                /* =========================
                                   NON-LIQUID ITEM
                                ========================= */
                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Price
                                    </label>

                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B4630]">
                                            ₱
                                        </span>

                                        <input
                                            type="number"
                                            min="0"
                                            value={price}
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                            placeholder="100"
                                            required
                                            className="w-full rounded-lg border border-[#D2AD8C] bg-white py-3 pl-9 pr-4 outline-none focus:border-[#A66A3F]"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Availability */}
                            <label className="flex cursor-pointer items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={available}
                                    onChange={(e) =>
                                        setAvailable(e.target.checked)
                                    }
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
                            Save Changes
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditMenuItemModal;