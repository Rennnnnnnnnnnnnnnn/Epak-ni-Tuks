import { useMemo, useState } from "react";

function AdminSales() {
    const [sales] = useState(() => {
        const savedSales = localStorage.getItem("sales");

        return savedSales
            ? JSON.parse(savedSales)
            : [];
    });

    const totalSales = useMemo(
        () => sales.reduce((sum, sale) => sum + sale.total, 0),
        [sales]
    );

    const totalOrders = sales.length;

    const averageOrder = totalOrders
        ? totalSales / totalOrders
        : 0;

    return (
        <div className="min-h-screen bg-[#F5E6D3] p-6 text-[#3B2416]">

            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A66A3F]">
                        Epak ni Tuks
                    </p>

                    <h1 className="text-4xl font-bold">
                        Sales
                    </h1>
                </div>


                {/* SUMMARY CARDS */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Total Sales */}
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
                </div>


                {/* SALES HISTORY */}
                <div className="mt-8 overflow-hidden rounded-2xl bg-[#FFF9F3] shadow-sm">

                    {/* HEADER */}
                    <div className="flex flex-col gap-4 border-b border-[#D2AD8C] p-6 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="text-2xl font-bold">
                                Sales History
                            </h2>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                Recent transactions
                            </p>
                        </div>

                        {/* Date Filter */}
                        <input
                            type="date"
                            defaultValue={new Date().toISOString().split("T")[0]}
                            className="rounded-lg border border-[#D2AD8C] bg-white px-4 py-2 outline-none focus:border-[#A66A3F]"
                        />
                    </div>

                    {/* EMPTY STATE */}
                    {sales.length === 0 ? (
                        <div className="py-20 text-center">
                            <div className="text-5xl">
                                🧾
                            </div>

                            <p className="mt-4 font-semibold">
                                No sales yet
                            </p>

                            <p className="mt-1 text-sm text-[#6B4630]">
                                Completed orders will appear here.
                            </p>
                        </div>
                    ) : (
                        /* TABLE */
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">

                                <thead className="bg-[#F5E6D3] text-sm text-[#6B4630]">

                                    <tr>

                                        <th className="px-6 py-4 font-semibold">
                                            Order
                                        </th>

                                        <th className="px-6 py-4 font-semibold">
                                            Time
                                        </th>

                                        <th className="px-6 py-4 font-semibold">
                                            Items
                                        </th>

                                        <th className="px-6 py-4 text-right font-semibold">
                                            Total
                                        </th>

                                    </tr>

                                </thead>


                                <tbody className="divide-y divide-[#E4CCB5]">

                                    {sales.map((sale) => (

                                        <tr
                                            key={sale.id}
                                            className="transition hover:bg-[#F5E6D3]/50"
                                        >

                                            {/* Order */}
                                            <td className="px-6 py-5">

                                                <p className="font-bold">
                                                    #{sale.id}
                                                </p>

                                                <p className="text-sm text-[#6B4630]">
                                                    {sale.date}
                                                </p>

                                            </td>


                                            {/* Time */}
                                            <td className="px-6 py-5 text-sm">
                                                {sale.time}
                                            </td>


                                            {/* Items */}
                                            <td className="px-6 py-5">

                                                <div className="space-y-1">

                                                    {sale.items.map((item, index) => (

                                                        <p
                                                            key={index}
                                                            className="text-sm"
                                                        >

                                                            <span className="font-semibold">
                                                                {item.quantity}×
                                                            </span>{" "}

                                                            {item.name}

                                                            {item.size && (
                                                                <span className="text-[#6B4630]">
                                                                    {" "}({item.size})
                                                                </span>
                                                            )}

                                                        </p>

                                                    ))}

                                                </div>

                                            </td>


                                            {/* Total */}
                                            <td className="px-6 py-5 text-right">

                                                <span className="font-bold text-[#A66A3F]">
                                                    ₱{sale.total.toLocaleString()}
                                                </span>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default AdminSales;