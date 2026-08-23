
import ks_logo from './KS_LOGO.jpeg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'

import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import banner_img from './banner image.png'

export const assets = {
    ks_logo,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    banner_img
}

export const products = [
    {
        _id: "kraft_01",
        name: "Handmade Crochet Tulip Stems",
        description: "Meticulously hand-crocheted vibrant tulip stems arranged in a glass vase, crafted with soft premium yarn by skilled Indian artisans. Bring timeless floral beauty into your space without wilting.",
        price: 325,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80"],
        category: "Crochet Flowers",
        subCategory: "Vase Arrangements",
        sizes: ["Single Stem", "Bouquet of 5", "Bouquet of 10"],
        date: 1716634345448,
        bestseller: true,
        tag: "",
        status: "SOLD OUT"
    },
    {
        _id: "kraft_02",
        name: "Macrame Bohemian Wall Hanging",
        description: "Intricately handwoven macrame wall hanging crafted from 100% natural organic cotton cord suspended on a natural wood driftwood branch. Perfectly transforms any room with bohemian elegance.",
        price: 850,
        originalPrice: 1200,
        image: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"],
        category: "Macrame",
        subCategory: "Wall Decor",
        sizes: ["Standard (18x24 in)", "Large (24x36 in)"],
        date: 1716621345448,
        bestseller: true,
        tag: "SALE",
        status: "IN STOCK"
    },
    {
        _id: "kraft_03",
        name: "Embroidered Floral Cushion Cover",
        description: "Exquisite hand-embroidered floral cushion cover featuring colorful botanical blooms on pure cotton linen fabric. Brings warmth, texture, and artistic charm to your living room or bedroom.",
        price: 650,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"],
        category: "Home Decor",
        subCategory: "Cushions",
        sizes: ["16x16 in", "18x18 in", "20x20 in"],
        date: 1716234545448,
        bestseller: true,
        tag: "NEW",
        status: "IN STOCK"
    },
    {
        _id: "kraft_04",
        name: "Crochet Rose Bouquet",
        description: "Stunning everlasting red crochet roses presented inside a geometric glass terrarium with brass frame details. An unforgettable gift handcrafted with pure love and devotion.",
        price: 500,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80"],
        category: "Crochet Flowers",
        subCategory: "Terrariums",
        sizes: ["Standard Glass Box", "Large Terrarium"],
        date: 1716621345448,
        bestseller: true,
        tag: "",
        status: "IN STOCK"
    },
    {
        _id: "kraft_05",
        name: "Macrame Plant Hanger",
        description: "Handwoven heavy-duty macrame plant holder crafted with natural jute & cotton twine. Elevates your indoor greenery and adds cozy texture to sunny windows and cozy nooks.",
        price: 450,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80"],
        category: "Macrame",
        subCategory: "Plant Holders",
        sizes: ["30 inches", "36 inches", "42 inches"],
        date: 1716622345448,
        bestseller: true,
        tag: "",
        status: "IN STOCK"
    },
    {
        _id: "kraft_06",
        name: "Colorful Crochet Coaster Set",
        description: "Set of 4 vibrant round crochet lace coasters hand-knit with soft, durable cotton threads in royal blue, teal green, golden yellow, and magenta pink. Protects surfaces with handmade style.",
        price: 350,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80"],
        category: "Tableware",
        subCategory: "Coasters",
        sizes: ["Set of 4", "Set of 6"],
        date: 1716623423448,
        bestseller: true,
        tag: "NEW",
        status: "IN STOCK"
    },
    {
        _id: "kraft_07",
        name: "Handmade Crochet Daisy Bouquet",
        description: "Delicate hand-crocheted daisy stems and tulips arranged in a clear glass vessel, captured in cheerful pastel tones. The perfect everlasting table accent.",
        price: 295,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80"],
        category: "Crochet Flowers",
        subCategory: "Vase Arrangements",
        sizes: ["Standard Bouquet"],
        date: 1716621542448,
        bestseller: false,
        tag: "",
        status: "IN STOCK"
    },
    {
        _id: "kraft_08",
        name: "Crochet Shaded Roses Arrangement",
        description: "Handcrafted shaded red crochet roses thoughtfully arranged in a glass geometric terrarium display. Timeless floral craft celebrating Indian artisan tradition.",
        price: 280,
        originalPrice: null,
        image: ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"],
        category: "Crochet Flowers",
        subCategory: "Terrariums",
        sizes: ["Standard Arrangement"],
        date: 1716622345448,
        bestseller: false,
        tag: "",
        status: "IN STOCK"
    }
];