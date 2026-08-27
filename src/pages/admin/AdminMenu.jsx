import { useState } from "react";
import menuData from "../../data/menuData";
import AddMenuItemModal from "../../components/modals/AddMenuItemModal";
import EditMenuItemModal from "../../components/modals/EditMenuItemModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminMenu() {
    const categories = [
        { name: "Coffee", icon: "☕" },
        { name: "Drinks", icon: "🥤" },
        { name: "Teas", icon: "🍵" },
        { name: "Meals", icon: "🍽️" },
        { name: "Sandwiches", icon: "🥪" },
        { name: "Pastries", icon: "🥐" },
        { name: "Desserts", icon: "🍰" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [editingItem, setEditingItem] = useState(null);
    const [showCategoryFilter, setShowCategoryFilter] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showAddMenuItemModal, setShowAddMenuItemModal] = useState(false);

    const [menuItems, setMenuItems] = useState(() => {
        const savedMenu = localStorage.getItem("menuData");
        return savedMenu ? JSON.parse(savedMenu) : menuData;
    });

    const filteredMenuItems = menuItems.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(item.category);

        return matchesSearch && matchesCategory;
    });

    const addMenuItem = (item) => {
        setMenuItems((prev) => {
            const updatedMenu = [...prev, item];

            localStorage.setItem(
                "menuData",
                JSON.stringify(updatedMenu)
            );

            return updatedMenu;
        });
    };

    const editMenuItem = (updatedItem) => {
        setMenuItems((prev) => {

            const updatedMenu = prev.map((item) =>
                item.id === updatedItem.id
                    ? updatedItem
                    : item
            );

            localStorage.setItem(
                "menuData",
                JSON.stringify(updatedMenu)
            );

            return updatedMenu;
        });
    };

    const deleteMenuItem = (id) => {
        setMenuItems((prev) => {

            const updatedMenu = prev.filter(
                (item) => item.id !== id
            );

            localStorage.setItem(
                "menuData",
                JSON.stringify(updatedMenu)
            );

            return updatedMenu;
        });
    };

    return (
        <>
            <div className="max-h-screen overflow-y-scroll bg-[#F5E6D3] text-[#3B2416]">
                <div className="mx-auto max-w-7xl p-6">

                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                                Epak ni Tuks
                            </p>

                            <h1 className="text-3xl font-bold">
                                Menu Management
                            </h1>
                        </div>

                        <button
                            onClick={() => setShowAddMenuItemModal(true)}
                            className="cursor-pointer rounded-lg bg-[#6B4630] px-5 py-3 font-semibold text-[#F5E6D3] transition hover:bg-[#4D2F20]"
                        >
                            + Add Item
                        </button>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Search menu items..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 rounded-lg border border-[#D2AD8C] bg-white/70 px-4 py-3 outline-none focus:border-[#A66A3F]"
                        />

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                                className="cursor-pointer rounded-lg border border-[#D2AD8C] bg-white/70 px-4 py-3 font-medium outline-none transition hover:bg-white"
                            >
                                Categories
                            </button>

                            {/* filter dropdown */}
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="mt-6 space-y-10">
                        {categories.map((category) => {

                            const items = filteredMenuItems.filter(
                                (item) => item.category === category.name
                            );

                            if (items.length === 0) {
                                return null;
                            }

                            return (
                                <section key={category.name}>

                                    {/* Category Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">
                                                {category.icon}
                                            </span>

                                            <h2 className="text-2xl font-bold">
                                                {category.name}
                                            </h2>
                                        </div>

                                        <div className="mt-2 h-1 w-12 rounded bg-[#C68B59]" />
                                    </div>

                                    {/* Items */}
                                    <div className="rounded-xl bg-[#FFF9F3] px-4 shadow-sm">

                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between border-b border-[#D2AD8C] py-4 last:border-0"
                                            >

                                                {/* Left */}
                                                <div className="flex items-center gap-4">

                                                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#D2AD8C]">
                                                        {item.image ? (
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="flex h-full w-full items-center justify-center text-2xl">
                                                                {category.icon}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div>
                                                        <h3 className="font-bold">
                                                            {item.name}
                                                        </h3>

                                                        <p className="text-sm text-[#6B4630]">
                                                            {item.description}
                                                        </p>
                                                    </div>

                                                </div>

                                                {/* Right */}
                                                <div className="flex items-center gap-6">

                                                    {!["Coffee", "Drinks", "Teas"].includes(
                                                        item.category
                                                    ) && (
                                                            <span className="font-bold">
                                                                ₱{item.price}
                                                            </span>
                                                        )}

                                                    {item.available ? (
                                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                                            Available
                                                        </span>
                                                    ) : (
                                                        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                                                            Unavailable
                                                        </span>
                                                    )}

                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => setEditingItem(item)}
                                                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#A66A3F] text-[#6B4630] hover:bg-[#E4CCB5]"
                                                            aria-label={`Edit ${item.name}`}
                                                            title="Edit"
                                                        >
                                                            <EditIcon fontSize="small" />
                                                        </button>

                                                        <button
                                                            onClick={() => deleteMenuItem(item.id)}
                                                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-red-300 text-red-600 hover:bg-red-200"
                                                            aria-label={`Delete ${item.name}`}
                                                            title="Delete"
                                                        >
                                                            <DeleteIcon fontSize="small" />
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        ))}

                                    </div>

                                </section>
                            );
                        })}
                    </div>

                </div>
            </div>

            {showAddMenuItemModal && (
                <AddMenuItemModal
                    onClose={() => setShowAddMenuItemModal(false)}
                    onAdd={addMenuItem}
                />
            )}

            {editingItem && (
                <EditMenuItemModal
                    item={editingItem}
                    onClose={() => setEditingItem(null)}
                    onSave={editMenuItem}
                />
            )}
        </>
    );
}

export default AdminMenu;