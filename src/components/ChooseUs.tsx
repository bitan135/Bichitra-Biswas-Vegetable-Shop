"use client";

import { motion, Variants } from "framer-motion";

const REASONS = [
    {
        icon: "⭐",
        title: "35 Years of Legacy",
        desc: "A business built on honesty, premium quality, and steady relationships since 1990 in Krishnanagar.",
    },
    {
        icon: "🌿",
        title: "Unmatched Quality",
        desc: "Stock sourced directly from trusted mandi networks and local farms every single morning.",
    },
    {
        icon: "🤝",
        title: "Personal Service",
        desc: "You deal directly with the proprietor — ensuring transparent pricing and full accountability.",
    },
];

export default function ChooseUs() {
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="trust" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-dark via-green to-dark overflow-hidden">
            {/* Background SVG Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans text-[11px] text-gold tracking-[5px] uppercase mb-4"
                    >
                        Why Choose Us &middot; কেন আমাদের বেছে নেবেন
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[42px] md:text-[56px] text-gold2 leading-tight mb-6"
                    >
                        Built on <span className="italic text-cream">Trust</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group border border-gold/20 bg-surface/40 p-10 md:p-[40px_28px] text-center hover:bg-surface/80 hover:border-gold/40 transition-all duration-500 ease-out"
                        >
                            <div className="text-[40px] mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-md">
                                {reason.icon}
                            </div>
                            <h3 className="font-serif text-lg text-gold2 mb-3">
                                {reason.title}
                            </h3>
                            <p className="font-sans text-[14px] text-sage leading-relaxed">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
