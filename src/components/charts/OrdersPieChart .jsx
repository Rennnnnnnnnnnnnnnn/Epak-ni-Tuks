import { useMemo } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function OrdersPieChart() {

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
            "#6B4630",
            "#A66A3F",
            "#C68B59",
            "#7A6A4F",
            "#8A5A6B",
            "#647A6A",
            "#6B7185",
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

        // Store quantity for each item
        const itemTotals = {};

        todaySales.forEach((sale) => {

            (sale.items || []).forEach((item) => {

                if (!itemTotals[item.name]) {
                    itemTotals[item.name] = 0;
                }

                itemTotals[item.name] += Number(
                    item.quantity || 0
                );

            });

        });

        // Convert object into chart data
        const data = Object.entries(itemTotals)
            .map(([name, quantity], index) => ({
                id: index,
                value: quantity,
                label: name,
            }))
            .filter((item) => item.value > 0);

        // Randomize slice order
        return shuffleArray(data);

    }, [sales]);

    return (
        <div className="rounded-2xl bg-[#FFF9F3] p-6 shadow-sm">

            {/* Header */}
            <h2 className="text-2xl font-bold">
                Today's Orders
            </h2>

            <p className="mt-1 text-sm text-[#6B4630]">
                Orders by item
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