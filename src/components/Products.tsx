"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const CATEGORIES = ['All', 'Everyday Essentials', 'Leafy Greens', 'Gourds', 'Seasonal', 'Herbs & Aromatics'];

const PRODUCTS = [
    { name: "Potato", emoji: "🥔", cat: "Everyday Essentials" },
    { name: "Onion", emoji: "🧅", cat: "Everyday Essentials" },
    { name: "Tomato", emoji: "🍅", cat: "Everyday Essentials" },
    { name: "Garlic", emoji: "🧄", cat: "Herbs & Aromatics" },
    { name: "Ginger", emoji: "🫚", cat: "Herbs & Aromatics" },
    { name: "Brinjal", emoji: "🍆", cat: "Seasonal" },
    { name: "Cauliflower", emoji: "🥦", cat: "Seasonal" },
    { name: "Cabbage", emoji: "🥬", cat: "Leafy Greens" },
    { name: "Spinach", emoji: "🌿", cat: "Leafy Greens" },
    { name: "Green Chilli", emoji: "🌶️", cat: "Herbs & Aromatics" },
    { name: "Bitter Gourd", emoji: "🥒", cat: "Gourds" },
    { name: "Pointed Gourd", emoji: "🥒", cat: "Gourds" },
    { name: "Ridge Gourd", emoji: "🥒", cat: "Gourds" },
    { name: "Bottle Gourd", emoji: "🥒", cat: "Gourds" },
    { name: "Carrot", emoji: "🥕", cat: "Seasonal" },
    { name: "Green Beans", emoji: "🫛", cat: "Seasonal" },
    { name: "Pumpkin", emoji: "🎃", cat: "Gourds" },
    { name: "Radish", emoji: "🤍", cat: "Seasonal" },
    { name: "Beetroot", emoji: "🍠", cat: "Everyday Essentials" },
    { name: "Drumstick", emoji: "🥢", cat: "Seasonal" },
    { name: "Raw Banana", emoji: "🍌", cat: "Everyday Essentials" },
    { name: "Taro Root", emoji: "🥔", cat: "Everyday Essentials" },
    { name: "Ivy Gourd", emoji: "🥒", cat: "Gourds" },
    { name: "Flat Beans", emoji: "🫛", cat: "Seasonal" },
    { name: "Green Papaya", emoji: "🍈", cat: "Everyday Essentials" },
    { name: "Jackfruit", emoji: "🍈", cat: "Seasonal" },
    { name: "Banana Flower", emoji: "🌸", cat: "Seasonal" },
    { name: "Snake Gourd", emoji: "🥒", cat: "Gourds" },
    { name: "Fenugreek Leaves", emoji: "🌱", cat: "Leafy Greens" },
    { name: "Mustard Greens", emoji: "🥬", cat: "Leafy Greens" },
    { name: "Coriander", emoji: "🌿", cat: "Herbs & Aromatics" },
    { name: "Curry Leaves", emoji: "🍃", cat: "Herbs & Aromatics" },
    { name: "Spring Onion", emoji: "🧅", cat: "Herbs & Aromatics" },
    { name: "Lemon", emoji: "🍋", cat: "Herbs & Aromatics" }
];

export default function Products() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = PRODUCTS.filter(
        (p) => activeTab === "All" || p.cat === activeTab
    );

    return (
        <section id="products" className="py-24 md:py-32 bg-dark">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans text-[11px] text-gold tracking-[5px] uppercase mb-4"
                    >
                        Premium Produce &middot; তাজা সবজি
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[42px] md:text-[56px] text-gold2 leading-tight mb-6"
                    >
                        Fresh <span className="italic text-cream">Every Day</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-sage text-base max-w-[600px] mx-auto leading-relaxed"
                    >
                        We supply a wide range of seasonal and everyday vegetables. Bulk orders and daily restaurant supplies available.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex overflow-x-auto hide-scrollbar pb-6 mb-12 justify-start md:justify-center gap-3">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={clsx(
                                "whitespace-nowrap px-6 py-2.5 rounded-full font-sans text-[13px] tracking-wide transition-all duration-300 border",
                                activeTab === cat
                                    ? "bg-gold border-gold text-surface font-semibold shadow-[0_0_15px_rgba(201,168,76,0.2)]"
                                    : "bg-transparent border-gold/20 text-sage hover:border-gold/50"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: i * 0.02 }}
                                key={product.name}
                                className="bg-surface border border-gold/10 p-[22px_16px] flex flex-col items-center justify-center rounded-sm group hover:border-gold/60 hover:-translate-y-[5px] hover:bg-[#1f4231] transition-all duration-[250ms] ease-out"
                            >
                                <div className="text-[30px] mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {product.emoji}
                                </div>
                                <div className="font-sans text-[13px] text-cream text-center tracking-wide">
                                    {product.name}
                                </div>
                            </motion.div>
                        ))}

                        {(activeTab === "All" || activeTab === "Seasonal") && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: filteredProducts.length * 0.02 }}
                                className="bg-surface border border-gold/10 p-[22px_16px] flex flex-col items-center justify-center rounded-sm"
                            >
                                <div className="text-[24px] mb-3 opacity-60">✨</div>
                                <div className="font-sans text-[12px] text-gold2 font-semibold text-center leading-snug">
                                    + More Seasonal Veg...
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://wa.me/917076076485"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gold text-darker px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest rounded-none hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] transition-all duration-300"
                    >
                        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        Request Today&apos;s Price List
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
