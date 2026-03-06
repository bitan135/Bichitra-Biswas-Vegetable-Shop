"use client";

import { motion, Variants } from "framer-motion";

export default function Contact() {
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-dark">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans text-[11px] text-gold tracking-[5px] uppercase mb-4"
                    >
                        Get In Touch &middot; যোগাযোগ করুন
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[42px] md:text-[56px] text-gold2 leading-tight mb-6"
                    >
                        Partner <span className="italic text-cream">With Us</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 items-stretch">

                    {/* Left: Contact Info Card */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full md:w-[55%] relative bg-surface border border-gold/20 p-10 md:p-[50px_44px]"
                    >
                        {/* Corner Brackets */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/40" />
                        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/40" />
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/40" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/40" />

                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">

                            <div className="space-y-6">
                                <motion.div variants={itemVariants} className="flex gap-4 items-start border-b border-gold/10 pb-6">
                                    <div className="text-xl text-gold mt-1">📍</div>
                                    <div>
                                        <div className="font-sans text-[11px] uppercase tracking-widest text-gold mb-1">Address</div>
                                        <div className="font-sans text-[15px] text-cream leading-relaxed">
                                            Patra Bazar, M.M. Ghosh Street<br />Krishnanagar, Nadia, West Bengal
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex gap-4 items-start border-b border-gold/10 pb-6">
                                    <div className="text-xl text-gold mt-1">📲</div>
                                    <div>
                                        <div className="font-sans text-[11px] uppercase tracking-widest text-gold mb-1">WhatsApp & Call</div>
                                        <div className="font-sans text-[15px] text-cream leading-relaxed">
                                            <a href="https://wa.me/917076076485" target="_blank" rel="noopener noreferrer" className="hover:text-gold2 transition-colors">WA: +91 7076076485</a>
                                            <span className="mx-2 text-sage/50">|</span>
                                            <a href="tel:+919732711025" className="hover:text-gold2 transition-colors">Call: +91 9732711025</a>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                                    <div className="text-xl text-gold mt-1">🕐</div>
                                    <div>
                                        <div className="font-sans text-[11px] uppercase tracking-widest text-gold mb-1">Shop Hours</div>
                                        <div className="font-sans text-[15px] text-cream leading-relaxed">
                                            6:00 AM – 3:00 PM &middot; Open Daily
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="flex flex-col gap-3 mt-4">
                                <a
                                    href="https://wa.me/917076076485"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative overflow-hidden w-full text-center bg-[#25D366] text-white px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest rounded-none hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 isolate"
                                >
                                    {/* Subtle internal pulse */}
                                    <div className="absolute inset-0 bg-white/20 scale-x-0 origin-left hover:scale-x-100 transition-transform duration-500 ease-out -z-10" />
                                    💬 Start WhatsApp Chat
                                </a>
                                <a
                                    href="tel:+919732711025"
                                    className="w-full text-center border border-gold bg-surface text-gold px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest rounded-none hover:bg-gold hover:text-darker transition-all duration-300"
                                >
                                    📞 Call Us Directly
                                </a>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-[45%] min-h-[400px] border border-gold/20 relative"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Patra%20Bazar,%20Krishnanagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', minHeight: '100%' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
