"use client";

import { motion, Variants } from "framer-motion";

const SERVICES = [
    {
        icon: "🏪",
        title: "Retail Sales",
        desc: "Walk in and pick the freshest vegetables at the best prices. Daily stock, daily freshness.",
    },
    {
        icon: "📦",
        title: "Wholesale Supply",
        desc: "Bulk supply for vendors and traders. Competitive pricing with consistent premium quality.",
    },
    {
        icon: "🏨",
        title: "Hotels & Restaurants",
        desc: "Reliable daily supply for top hotels, fine-dining restaurants, and local dhabas.",
    },
    {
        icon: "🏫",
        title: "Schools & Caterers",
        desc: "Scheduled weekly supply for school canteens and large-scale catering businesses.",
    },
    {
        icon: "🚚",
        title: "Delivery Available",
        desc: "Order via WhatsApp and get your commercial vegetable order delivered directly.",
    },
    {
        icon: "📋",
        title: "Daily Price List",
        desc: "Join our WhatsApp business group to receive updated wholesale rates every morning at 6 AM.",
    },
];

export default function Services() {
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="services" className="w-full bg-green py-24 md:py-32">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans text-[11px] text-gold tracking-[5px] uppercase mb-4"
                    >
                        What We Do &middot; আমাদের পরিষেবা
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[42px] md:text-[56px] text-gold2 leading-tight mb-6"
                    >
                        Serving Every <span className="italic text-cream">Need</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gold/10 border border-gold/10"
                >
                    {SERVICES.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group relative bg-dark/60 p-10 md:p-[44px_36px] hover:bg-darker transition-colors duration-500 overflow-hidden"
                        >
                            {/* Animated Top Border Line */}
                            <div className="absolute top-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out" />

                            <div className="relative z-10 transform group-hover:-translate-y-1.5 transition-transform duration-500">
                                <div className="text-[36px] mb-6 drop-shadow-lg">
                                    {service.icon}
                                </div>
                                <h3 className="font-serif text-xl text-gold2 mb-4">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-[15px] text-sage leading-[1.8]">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
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
                        Inquire About Bulk Orders
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
