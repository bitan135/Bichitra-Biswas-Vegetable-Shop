"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    const titleWords = "Bichitra Biswas".split(" ");

    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark">
            {/* Background SVG Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Animated Horizontal Rules */}
            <div className="absolute top-[35%] left-0 w-full h-[1px] pointer-events-none flex justify-between z-0 opacity-20">
                <motion.div className="h-full bg-gold" initial={{ width: 0 }} animate={{ width: "35%" }} transition={{ duration: 1.5, ease: "easeOut" }} />
                <motion.div className="h-full bg-gold" initial={{ width: 0 }} animate={{ width: "35%" }} transition={{ duration: 1.5, ease: "easeOut" }} />
            </div>

            <div className="relative z-10 max-w-[900px] w-full mx-auto px-6 text-center flex flex-col items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <motion.p variants={itemVariants} className="font-sans text-[11px] text-gold tracking-[6px] uppercase mb-6">
                        — EST. 1990 · 35 YEARS OF TRUST —
                    </motion.p>

                    <h1 className="font-serif font-bold text-gold2 text-[clamp(52px,8vw,96px)] leading-[1.1] mb-2 flex flex-wrap justify-center gap-x-[clamp(15px,3vw,30px)]">
                        {titleWords.map((word, i) => (
                            <motion.span key={i} variants={itemVariants} className="inline-block">
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p variants={itemVariants} className="font-bengali text-sage2 text-xl mb-3">
                        বিচিত্র বিশ্বাস ভেজিটেবল শপ
                    </motion.p>

                    <motion.p variants={itemVariants} className="font-sans text-[12px] tracking-[8px] uppercase text-sage mb-8">
                        VEGETABLE SHOP · KRISHNANAGAR
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex items-center w-full max-w-[280px] mb-8 opacity-80">
                        <div className="flex-grow h-[1px] bg-gold/40"></div>
                        <div className="mx-4 text-gold/60 text-[10px]">◆</div>
                        <div className="flex-grow h-[1px] bg-gold/40"></div>
                    </motion.div>

                    <motion.p variants={itemVariants} className="font-serif italic text-[22px] text-sage2 mb-6">
                        Nature&apos;s Best, Delivered Fresh
                    </motion.p>

                    <motion.p variants={itemVariants} className="font-sans text-[16px] text-sage leading-[1.9] max-w-[580px] mb-12">
                        Sourcing the finest, premium-quality produce directly from local mandis to your kitchen. Experience 35 years of uncompromising freshness, wholesale pricing, and reliable daily delivery.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
                        <a href="https://wa.me/917076076485" target="_blank" rel="noopener noreferrer" className="bg-gold text-darker px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest rounded-none hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] transition-all duration-300 w-full sm:w-auto">
                            📲 Order on WhatsApp
                        </a>
                        <a href="#products" className="border border-gold text-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest rounded-none hover:bg-gold hover:text-darker transition-all duration-300 w-full sm:w-auto">
                            View Products
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 mb-20">
                        {['Sourced Fresh Daily', 'Wholesale Rates', 'Timely Delivery'].map((pill, i) => (
                            <div key={i} className="border border-gold/30 rounded-full px-5 py-2 font-sans text-[12px] text-sage tracking-wide bg-dark/50 backdrop-blur-sm">
                                {pill}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bouncing scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
                <span className="font-sans text-[9px] uppercase tracking-[4px] text-gold/60 mb-3">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="w-[1px] h-[30px] bg-gradient-to-b from-gold/0 via-gold/50 to-gold/100"></div>
                    <svg className="w-3 h-3 text-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
