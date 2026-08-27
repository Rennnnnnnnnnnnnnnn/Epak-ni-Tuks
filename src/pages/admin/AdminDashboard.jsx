import { useMemo } from "react";
import menuData from "../../data/menuData";
import OrdersPieChart from "../../components/charts/OrdersPieChart ";

function AdminDashboard() {
    const menuItems = useMemo(() => {
        const savedMenu = localStorage.getItem("menuData");
        return savedMenu ? JSON.parse(savedMenu) : menuData;
    }, []);

    const sales = useMemo(() => {
        const savedSales = localStorage.getItem("sales");
        return savedSales ? JSON.parse(savedSales) : [];
    }, []);

    const totalSales = sales.reduce(
        (sum, sale) => sum + Number(sale.total || 0),
        0
    );

    const totalOrders = sales.length;

    const averageOrder = totalOrders
        ? totalSales / totalOrders
        : 0;

    const availableItems = menuItems.filter(
        (item) => item.available
    ).length;

    const unavailableItems = menuItems.filter(
        (item) => !item.available
    ).length;

    const recentSales = [...sales]
        .sort((a, b) => {
            return new Date(`${b.date} ${b.time}`) -
                new Date(`${a.date} ${a.time}`);
        })
        .slice(0, 5);

    return (
        <div className="min-h-screen overflow-y-scroll bg-[#F5E6D3] text-[#3B2416]">

            <div className="mx-auto max-w-7xl p-6">



                {/* HEADER */}
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                        Epak ni Tuks
                    </p>

                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">

                    {/* PIE CHART */}
                    <div className="min-w-0">
                        <OrdersPieChart />
                    </div>

                    {/* SUMMARY CARDS */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        {/* Sales */}
                        <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">
                            <p className="text-sm font-semibold text-[#6B4630]">
                                Today's Sales
                            </p>

                            <p className="mt-2 text-3xl font-bold text-[#A66A3F]">
                                ₱{totalSales.toLocaleString()}
                            </p>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                Total revenue
                            </p>
                        </div>

                        {/* Orders */}
                        <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">
                            <p className="text-sm font-semibold text-[#6B4630]">
                                Orders
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {totalOrders}
                            </p>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                Orders today
                            </p>
                        </div>

                        {/* Average */}
                        <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">
                            <p className="text-sm font-semibold text-[#6B4630]">
                                Average Order
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                ₱{averageOrder.toFixed(2)}
                            </p>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                Average order value
                            </p>
                        </div>

                        {/* Menu */}
                        <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">
                            <p className="text-sm font-semibold text-[#6B4630]">
                                Menu Items
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {menuItems.length}
                            </p>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                {availableItems} available
                            </p>
                        </div>

                    </div>

                </div>

                {/* LOWER SECTION */}
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {/* MENU STATUS */}
                    <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">
                        <h2 className="text-xl font-bold">
                            Menu Status
                        </h2>

                        <p className="mt-1 text-sm text-[#6B4630]">
                            Current menu availability
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="font-medium">
                                    Available
                                </span>

                                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                    {availableItems}
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="font-medium">
                                    Unavailable
                                </span>

                                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                                    {unavailableItems}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-t border-[#D2AD8C] pt-4">
                                <span className="font-bold">
                                    Total
                                </span>

                                <span className="font-bold">
                                    {menuItems.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RECENT ORDERS */}
                    <div className="rounded-2xl bg-[#FFF9F3] shadow-sm lg:col-span-2">
                        <div className="border-b border-[#D2AD8C] p-6">
                            <h2 className="text-xl font-bold">
                                Recent Orders
                            </h2>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                Your latest transactions
                            </p>
                        </div>

                        {recentSales.length === 0 ? (
                            <div className="p-10 text-center">
                                <div className="text-4xl">
                                    🧾
                                </div>

                                <p className="mt-3 font-semibold">
                                    No orders yet
                                </p>

                                <p className="mt-1 text-sm text-[#6B4630]">
                                    Completed orders will appear here.
                                </p>
                            </div>
                        ) : (

                            <div className="divide-y divide-[#E4CCB5]">
                                {recentSales.map((sale) => (
                                    <div
                                        key={sale.id}
                                        className="flex items-center justify-between px-6 py-4"
                                    >
                                        <div>
                                            <p className="font-bold">
                                                #{sale.id}
                                            </p>

                                            <p className="text-sm text-[#6B4630]">
                                                {sale.date} • {sale.time}
                                            </p>
                                        </div>

                                        <p className="font-bold text-[#A66A3F]">
                                            ₱{Number(sale.total).toLocaleString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;