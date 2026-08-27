import { useState } from "react";
import defaultMenuData from "../../data/menuData";

function AdminOrders() {
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [processingPayment, setProcessingPayment] = useState(false);

    const [menuItems] = useState(() => {
        const savedMenu = localStorage.getItem("menuData");

        return savedMenu
            ? JSON.parse(savedMenu)
            : defaultMenuData;
    });

    const addToCart = (item, size = null, quantityToAdd = 1) => {
        const price = size ? item.sizes[size] : item.price;

        setCart((current) => {
            const existing = current.find(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.size === size
            );

            if (existing) {
                return current.map((cartItem) =>
                    cartItem.id === item.id &&
                        cartItem.size === size
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + quantityToAdd,
                        }
                        : cartItem
                );
            }

            return [
                ...current,
                {
                    ...item,
                    price,
                    size,
                    quantity: quantityToAdd,
                },
            ];
        });
    };

    const removeFromCart = (id) => {
        setCart((current) =>
            current.filter((item) => item.id !== id)
        );
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const completeOrder = () => {
        if (cart.length === 0 || processingPayment) return;

        setProcessingPayment(true);

        setTimeout(() => {
            const now = new Date();

            const newSale = {
                id: Date.now(),
                date: now.toISOString().split("T")[0],
                time: now.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                }),
                items: cart.map((item) => ({
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    size: item.size,
                    quantity: item.quantity,
                    price: item.price,
                })),
                total,
            };

            const existingSales = JSON.parse(
                localStorage.getItem("sales") || "[]"
            );

            localStorage.setItem(
                "sales",
                JSON.stringify([
                    ...existingSales,
                    newSale,
                ])
            );

            setCart([]);
            setProcessingPayment(false);
        }, 1000);
    };

    return (
        <div className="max-h-screen bg-[#F5E6D3] text-[#3B2416] overflow-scroll">
            <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-3">
                {/* MENU */}
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                            Epak ni Tuks
                        </p>

                        <h1 className="text-4xl font-bold">
                            Point of Sale
                        </h1>
                    </div>
                    {/* Menu Items */}
                    <div className="space-y-10">
                        {[
                            "Coffee",
                            "Drinks",
                            "Teas",
                            "Meals",
                            "Sandwiches",
                            "Pastries",
                            "Desserts",
                        ].map((category) => {

                            const items = menuItems.filter(
                                (item) => item.category === category
                            );

                            if (items.length === 0) {
                                return null;
                            }

                            return (
                                <section key={category}>
                                    {/* Category Header */}
                                    <div className="mb-4">
                                        <h2 className="text-2xl font-bold">
                                            {category}
                                        </h2>

                                        <div className="mt-2 h-1 w-12 rounded bg-[#C68B59]" />
                                    </div>

                                    {/* Items */}
                                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                        {items.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    if (item.sizes) {
                                                        setSelectedItem(item);
                                                        setSelectedSize(null);
                                                    } else {
                                                        addToCart(item);
                                                    }
                                                }}
                                                disabled={!item.available}
                                                className="overflow-hidden rounded-xl bg-[#FFF9F3] text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md disabled:cursor-not-allowed"
                                            >
                                                {/* Image */}
                                                <div className="relative">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-36 w-full object-cover"
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
                                                <div className="p-4">
                                                    <h3 className="font-bold">
                                                        {item.name}
                                                    </h3>

                                                    {!item.sizes && (
                                                        <p className="mt-2 font-bold text-[#A66A3F]">
                                                            ₱{item.price}
                                                        </p>
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>

                {/* CURRENT ORDER */}
                <div className="lg:sticky lg:top-6 lg:h-fit">
                    <div className="rounded-2xl bg-[#FFF9F3] shadow-sm">
                        {/* Header */}
                        <div className="border-b border-[#D2AD8C] p-5">
                            <h2 className="text-2xl font-bold">
                                Current Order
                            </h2>

                            <p className="text-sm text-[#6B4630]">
                                {cart.length} item(s)
                            </p>
                        </div>
                        {/* Cart */}
                        <div className="max-h-[50vh] overflow-y-auto p-5">
                            {cart.length === 0 ? (
                                <div className="py-16 text-center">

                                    <div className="text-5xl">
                                        🛒
                                    </div>

                                    <p className="mt-4 font-semibold">
                                        No items yet
                                    </p>

                                    <p className="mt-1 text-sm text-[#6B4630]">
                                        Select an item to add it to the order.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">

                                    <div className="space-y-6">
                                        {[
                                            "Coffee",
                                            "Drinks",
                                            "Teas",
                                            "Meals",
                                            "Sandwiches",
                                            "Pastries",
                                            "Desserts",
                                        ].map((category) => {

                                            const items = cart.filter(
                                                (item) => item.category === category
                                            );

                                            if (items.length === 0) {
                                                return null;
                                            }

                                            return (
                                                <section key={category}>
                                                    {/* Category */}
                                                    <div className="mb-3">
                                                        <h3 className="text-sm font-bold uppercase tracking-wide text-[#A66A3F]">
                                                            {category}
                                                        </h3>

                                                        <div className="mt-1 h-px bg-[#D2AD8C]" />
                                                    </div>
                                                    {/* Items */}
                                                    <div className="space-y-4">
                                                        {items.map((item) => (
                                                            <div
                                                                key={`${item.id}-${item.size || "default"}`}
                                                                className="flex items-center justify-between gap-3"
                                                            >
                                                                {/* Item information */}
                                                                <div className="min-w-0">
                                                                    <p className="font-semibold">
                                                                        {item.name}
                                                                        {item.size && (
                                                                            <span className="ml-1 text-sm font-normal text-[#6B4630]">
                                                                                ({item.size})
                                                                            </span>
                                                                        )}
                                                                    </p>

                                                                    <p className="text-sm text-[#6B4630]">
                                                                        ₱{item.price} × {item.quantity}
                                                                    </p>
                                                                </div>

                                                                {/* Price / Remove */}
                                                                <div className="shrink-0 text-right">

                                                                    <p className="font-bold">
                                                                        ₱{item.price * item.quantity}
                                                                    </p>

                                                                    <button
                                                                        onClick={() =>
                                                                            removeFromCart(
                                                                                item.id,
                                                                                item.size
                                                                            )
                                                                        }
                                                                        className="text-xs text-[#A66A3F] hover:underline"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Total */}
                        <div className="border-t border-[#D2AD8C] p-5">

                            <div className="flex justify-between">
                                <span className="text-[#6B4630]">
                                    Subtotal
                                </span>

                                <span className="font-semibold">
                                    ₱{total}
                                </span>
                            </div>

                            <div className="mt-2 flex justify-between text-xl font-bold">
                                <span>
                                    Total
                                </span>

                                <span className="text-[#A66A3F]">
                                    ₱{total}
                                </span>
                            </div>

                            <button
                                disabled={cart.length === 0 || processingPayment}
                                onClick={completeOrder}
                                className="mt-5 w-full rounded-lg bg-[#6B4630] px-5 py-3 font-semibold text-[#F5E6D3] transition hover:bg-[#4D2F20] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processingPayment ? "Processing Payment..." : "Proceed to Payment"}
                            </button>

                        </div>

                    </div>

                </div>

            </div>
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-[#FFF9F3] p-6 shadow-xl">
                        <h2 className="text-2xl font-bold">
                            {selectedItem.name}
                        </h2>

                        <p className="mt-1 text-sm text-[#6B4630]">
                            Select a size
                        </p>

                        {/* Sizes */}
                        <div className="mt-6 space-y-3">
                            {Object.entries(selectedItem.sizes).map(
                                ([size, price]) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`flex w-full items-center justify-between rounded-lg border px-4 py-4 text-left transition ${selectedSize === size
                                            ? "border-[#6B4630] bg-[#E4CCB5]"
                                            : "border-[#D2AD8C] bg-white hover:bg-[#F5E6D3]"
                                            }`}
                                    >
                                        <span className="font-semibold">
                                            {size}
                                        </span>

                                        <span className="font-bold text-[#A66A3F]">
                                            ₱{price}
                                        </span>
                                    </button>
                                )
                            )}
                        </div>

                        {/* Quantity */}
                        <div className="mt-6">
                            <label className="mb-2 block text-sm font-semibold">
                                Quantity
                            </label>

                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) =>
                                    setQuantity(
                                        Math.max(1, Number(e.target.value))
                                    )
                                }
                                className="w-full rounded-lg border border-[#D2AD8C] bg-white px-4 py-3 outline-none focus:border-[#A66A3F]"
                            />
                        </div>
                        {/* Buttons */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setSelectedItem(null);
                                    setSelectedSize(null);
                                    setQuantity(1);
                                }}
                                className="rounded-lg border border-[#D2AD8C] px-5 py-3 font-semibold text-[#6B4630] hover:bg-[#E4CCB5]"
                            >
                                Cancel
                            </button>

                            <button
                                disabled={!selectedSize || quantity < 1}
                                onClick={() => {
                                    addToCart(
                                        selectedItem,
                                        selectedSize,
                                        quantity
                                    );
                                    setSelectedItem(null);
                                    setSelectedSize(null);
                                    setQuantity(1);
                                }}
                                className="rounded-lg bg-[#6B4630] px-5 py-3 font-semibold text-[#F5E6D3] hover:bg-[#4D2F20] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Add to Order
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </div>
    );
}

export default AdminOrders;