"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion, Variants } from "framer-motion";

function Counter({ from, to }: { from: number; to: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });
    const motionValue = useMotionValue(from);
    // smooth spring animation for counting
    const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.ceil(latest).toString();
            }
        });
    }, [springValue]);

    return <span ref={ref}>{from}</span>;
}

const STATS = [
    { value: 35, suffix: "+", label: "Years of Trust" },
    { value: 100, suffix: "+", label: "Daily Clients" },
    { value: 50, suffix: "+", label: "Fresh Varieties" },
    { value: 100, suffix: "%", label: "Quality Assured" },
];

export default function StatsStrip() {
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="w-full bg-green border-y border-gold/30">
            <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/20"
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center pt-6 md:pt-0"
                        >
                            <div className="flex items-baseline font-serif text-[42px] md:text-[58px] text-gold2 leading-none mb-2">
                                <Counter from={0} to={stat.value} />
                                <span>{stat.suffix}</span>
                            </div>
                            <div className="font-sans text-[11px] tracking-[4px] uppercase text-sage text-center">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
