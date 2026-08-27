const menuData = [
    // =========================
    // COFFEE
    // =========================

    {
        id: 1,
        name: "Espresso",
        description: "Rich and bold classic espresso.",
        category: "Coffee",
        available: true,
        image: "https://www.eatthriveglow.com/wp-content/uploads/2025/08/Viennese_Espresso.png",

        sizes: {
            Short: 100,
            Tall: 120,
            Grande: 140,
        },
    },

    {
        id: 2,
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam.",
        category: "Coffee",
        available: true,
        image: "https://www.thedailymeal.com/img/gallery/the-one-ingredient-that-will-make-or-break-your-at-home-cappuccino/l-intro-1670419517.jpg",

        sizes: {
            Short: 130,
            Tall: 150,
            Grande: 170,
        },
    },

    {
        id: 3,
        name: "Cafe Latte",
        description: "Smooth espresso with steamed milk.",
        category: "Coffee",
        available: true,
        image: "https://static.vecteezy.com/system/resources/previews/038/815/761/large_2x/ai-generated-a-latte-s-velvety-foam-dances-atop-rich-steaming-milk-in-a-porcelain-cup-free-photo.jpeg",

        sizes: {
            Short: 140,
            Tall: 160,
            Grande: 180,
        },
    },


    // =========================
    // DRINKS
    // =========================

    {
        id: 4,
        name: "Iced Americano",
        description: "Espresso served over ice and water.",
        category: "Drinks",
        available: true,
        image: "https://www.icedcoffeetea.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-7-2026-10_49_41-AM.png",

        sizes: {
            Short: 120,
            Tall: 140,
            Grande: 160,
        },
    },

    {
        id: 5,
        name: "Iced Chocolate",
        description: "Cold chocolate drink served over ice.",
        category: "Drinks",
        available: true,
        image: "https://img.freepik.com/premium-photo/iced-chocolate-cafe-ar-c_839793-10489.jpg",

        sizes: {
            Short: 140,
            Tall: 160,
            Grande: 180,
        },
    },

    {
        id: 6,
        name: "Caramel Frappe",
        description: "Creamy blended coffee with caramel.",
        category: "Drinks",
        available: true,
        image: "https://tse2.mm.bing.net/th/id/OIP.n82izHLxH-EoJ9yiayPfyAHaEJ?r=0&pid=Api",

        sizes: {
            Short: 160,
            Tall: 180,
            Grande: 200,
        },
    },


    // =========================
    // TEA
    // =========================

    {
        id: 7,
        name: "Matcha Latte",
        description: "Smooth matcha with steamed milk.",
        category: "Teas",
        available: true,
        image: "https://www.lethematcha.fr/wp-content/uploads/2025/03/matcha-latte.png",

        sizes: {
            Short: 150,
            Tall: 170,
            Grande: 190,
        },
    },

    {
        id: 8,
        name: "Milk Tea",
        description: "Creamy black tea with milk.",
        category: "Teas",
        available: true,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.epicurious.com%2Fphotos%2F629f98926e3960ec24778116%2F3%3A2%2Fw_6819%2Ch_4546%2Cc_limit%2FBubbleTea_RECIPE_052522_34811.jpg&f=1&nofb=1&ipt=ab907def113204c02f3bf26fed1351860a3a50da54979c396ad5dfcfc4913943",

        sizes: {
            Short: 130,
            Tall: 150,
            Grande: 170,
        },
    },


    // =========================
    // PASTRIES
    // =========================

    {
        id: 9,
        name: "Kwasong",
        description: "Buttery and freshly baked.",
        category: "Pastries",
        price: 90,
        available: true,
        image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg",
    },

    {
        id: 10,
        name: "Chocolate Muffin",
        description: "Soft chocolate muffin with chocolate chips.",
        category: "Pastries",
        price: 100,
        available: true,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.jllIpKiLWUBRkmSIWLknFQHaFj%3Fr%3D0%26pid%3DApi&f=1&ipt=705f343a15670b5b98e74843e3a62e319bf7459540f832804d7ed9c644f30345",
    },

    {
        id: 11,
        name: "Cinnamon Roll",
        description: "Soft roll topped with cinnamon glaze.",
        category: "Pastries",
        price: 110,
        available: true,
        image: "https://ambermenu.com.ph/wp-content/uploads/2026/01/cinnabon-cinnamon-rolls-3.webp",
    },


    // =========================
    // MEALS
    // =========================

    {
        id: 12,
        name: "Chicken Rice Bowl",
        description: "Grilled chicken served with seasoned rice.",
        category: "Meals",
        price: 220,
        available: true,
        image: "https://tastyplateshub.com/wp-content/uploads/2026/01/teriyaki-chicken-rice-bowl-recipe.jpg",
    },

    {
        id: 13,
        name: "Breakfast Plate",
        description: "Eggs, sausage, toast, and potatoes.",
        category: "Meals",
        price: 200,
        available: true,
        image: "https://thumbs.dreamstime.com/b/delicious-breakfast-plate-eggs-bacon-sausage-toast-classic-two-sunny-side-up-crispy-juicy-links-toasted-bread-328864080.jpg",
    },

    {
        id: 14,
        name: "Club Sandwich",
        description: "Chicken, lettuce, tomato, and cheese.",
        category: "Meals",
        price: 180,
        available: true,
        image: "https://recipeflow.com/wp-content/uploads/2015/08/how-to-make-a-club-sandwich-easy.jpg",
    },


    // =========================
    // DESSERTS
    // =========================

    {
        id: 15,
        name: "Cheesecake",
        description: "Creamy classic cheesecake.",
        category: "Desserts",
        price: 150,
        available: true,
        image: "https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_3840/f_auto/q_auto/v1/dxp-images/brands/Recipes/canada-recipe-assets-final/philadelphia-new-york-cheesecake/philadelphia-new-york-cheesecake-503035",
    },

    {
        id: 16,
        name: "Chocolate Cake",
        description: "Rich chocolate cake with chocolate frosting.",
        category: "Desserts",
        price: 160,
        available: false,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FStB8Dm3yrdqcFdvtK-UyH6CPjRE%3D%2F6192x4128%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Feasy-chocolate-glaze-for-cakes-desserts-3053469-step-05-25d57a7635d14343bb0e9b24b6e56c3f.jpg&f=1&nofb=1&ipt=1e22ca22bbd1c6850006f890b37a4fe5dff937b29dc0adb4de135288c7ba390d",
    },
];

export default menuData;