import { useMemo } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function OrdersPieChart() {

    const categories = [
        "Coffee",
        "Drinks",
        "Teas",
        "Meals",
        "Sandwiches",
        "Pastries",
        "Desserts",
    ];

    // Get sales from localStorage
    const sales = useMemo(() => {
        const savedSales = localStorage.getItem("sales");

        return savedSales
            ? JSON.parse(savedSales)
            : [];
    }, []);

    // Shuffle array
    const shuffleArray = (array) => {
        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(
                Math.random() * (i + 1)
            );

            [shuffled[i], shuffled[j]] = [
                shuffled[j],
                shuffled[i],
            ];
        }

        return shuffled;
    };

    // Randomize colors
    const colors = useMemo(() => {

        const availableColors = [
            "#6B4630", // Coffee brown
            "#A66A3F", // Caramel
            "#C68B59", // Warm tan
            "#7A6A4F", // Olive
            "#8A5A6B", // Dusty rose
            "#647A6A", // Sage
            "#6B7185", // Muted blue
        ];

        return shuffleArray(availableColors);

    }, []);

    // Generate pie chart data
    const orderData = useMemo(() => {

        const today = new Date()
            .toISOString()
            .split("T")[0];

        // Only today's sales
        const todaySales = sales.filter(
            (sale) => sale.date === today
        );

        const data = categories
            .map((category, index) => {

                const quantity = todaySales.reduce(
                    (total, sale) => {

                        const categoryItems =
                            (sale.items || []).filter(
                                (item) =>
                                    item.category === category
                            );

                        return (
                            total +
                            categoryItems.reduce(
                                (sum, item) =>
                                    sum +
                                    Number(
                                        item.quantity || 0
                                    ),
                                0
                            )
                        );
                    },
                    0
                );

                return {
                    id: index,
                    value: quantity,
                    label: category,
                };
            })
            // Remove categories with no orders
            .filter((item) => item.value > 0);

        // Randomize the order of the slices
        return shuffleArray(data);

    }, [sales]);

    return (
        <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">

            {/* Header */}
            <h2 className="text-2xl font-bold">
                Today's Orders
            </h2>

            <p className="mt-1 text-sm text-[#6B4630]">
                Orders by category
            </p>

            {/* Chart */}
            <div className="flex justify-center">

                {orderData.length > 0 ? (

                    <PieChart
                        colors={colors}
                        series={[
                            {
                                data: orderData,

                                innerRadius: 60,
                                outerRadius: 98,

                                paddingAngle: 1,
                                cornerRadius: 5,

                                startAngle: 0,
                                endAngle: 360,

                                cx: 149,
                                cy: 150,

                                // Hover effects
                                highlightScope: {
                                    fade: "global",
                                    highlight: "item",
                                },

                                highlighted: {
                                    additionalRadius: 5,
                                },
                            },
                        ]}
                        width={400}
                        height={320}
                    />

                ) : (

                    <div className="flex h-[320px] items-center justify-center text-sm text-[#6B4630]">
                        No orders today
                    </div>

                )}

            </div>

        </div>
    );
}

export default OrdersPieChart;