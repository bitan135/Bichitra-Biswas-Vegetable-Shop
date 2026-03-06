"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect: moves upward slightly faster than scroll
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const textContainerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const textItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-dark">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[80px] items-center">

                {/* Left: Quote Card */}
                <motion.div
                    style={{ y }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-surface border border-gold/20 p-10 md:p-[50px] shadow-2xl"
                >
                    {/* Corner Brackets */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/40" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/40" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/40" />

                    {/* Large Quote Mark */}
                    <div className="absolute top-4 left-6 font-serif text-[100px] text-gold/20 leading-none select-none">
                        &ldquo;
                    </div>

                    <div className="relative z-10 pt-8">
                        <p className="font-serif italic text-lg md:text-xl text-sage2 leading-[2] mb-8">
                            &quot;We don&apos;t just sell vegetables; we deliver a promise of health, freshness, and quality that our family has stood by for over three decades in this very market.&quot;
                        </p>
                        <div>
                            <div className="font-serif text-[22px] text-gold2 mb-1">
                                Bichitra Biswas
                            </div>
                            <div className="font-sans text-xs text-sage uppercase tracking-wider">
                                Proprietor &middot; Est. 1990
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p variants={textItemVariants} className="font-sans text-[11px] text-gold tracking-[5px] uppercase mb-4">
                        Our Heritage &middot; আমাদের ঐতিহ্য
                    </motion.p>

                    <motion.h2 scroll-reveal="true" variants={textItemVariants} className="font-serif text-3xl md:text-[42px] text-gold2 leading-tight mb-8">
                        A Name Trusted by <span className="italic text-cream">Krishnanagar</span>
                    </motion.h2>

                    <div className="space-y-6 text-sage font-sans text-base leading-[1.9]">
                        <motion.p variants={textItemVariants}>
                            Since 1990, Bichitra Biswas Vegetable Shop has been a cornerstone of Patra Bazar. What started as a modest stall has grown into Krishnanagar&apos;s most reliable supplier of premium, farm-fresh produce.
                        </motion.p>
                        <motion.p variants={textItemVariants}>
                            We source daily from trusted local farmers across Nadia and the bustling Sealdah market to ensure everything you buy is crisp, vibrant, and packed with nutrients. Whether you&apos;re cooking for your family or running a commercial kitchen, we guarantee wholesale rates without compromising on quality.
                        </motion.p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
