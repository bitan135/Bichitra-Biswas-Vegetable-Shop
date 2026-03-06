"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const LINKS = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);

            const sections = LINKS.map(l => l.href.substring(1));
            let current = "";
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 200) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-400 font-sans",
                    isScrolled
                        ? "bg-dark/96 backdrop-blur-[14px] border-b border-gold/20 py-4"
                        : "bg-transparent py-6 border-b border-transparent"
                )}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 relative z-[110]">
                        <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
                        <div>
                            <div className="font-serif font-bold text-gold2 text-xl tracking-wide leading-tight">
                                BICHITRA BISWAS
                            </div>
                            <div className="font-sans italic text-sage text-[11px] tracking-[2px] uppercase mt-0.5">
                                Vegetable Shop · <span className="font-bengali normal-case tracking-normal">বিচিত্র বিশ্বাস</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-10">
                        {LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sage hover:text-gold2 text-[11px] uppercase tracking-[4px] font-medium transition-colors py-2 group"
                            >
                                {link.name}
                                {activeSection === link.href.substring(1) && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {/* Hover underline */}
                                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="https://wa.me/917076076485"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center justify-center bg-gold text-darker px-7 py-3 text-[13px] font-semibold tracking-[1.5px] uppercase rounded-none hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300"
                    >
                        ORDER ON WHATSAPP
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 z-[110]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-full h-[2px] bg-gold2"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-full h-[2px] bg-gold2"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-full h-[2px] bg-gold2"
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[105] bg-dark/98 backdrop-blur-md flex flex-col items-center justify-center pt-20"
                    >
                        <nav className="flex flex-col items-center gap-8 text-center">
                            {LINKS.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="font-serif text-4xl text-cream hover:text-gold2 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="https://wa.me/917076076485"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: LINKS.length * 0.1 }}
                                className="mt-8 bg-gold text-darker px-8 py-4 text-sm font-semibold tracking-widest uppercase"
                            >
                                ORDER ON WHATSAPP
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
