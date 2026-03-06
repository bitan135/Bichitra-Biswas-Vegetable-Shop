import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-darker border-t-[2px] border-gold/15 pt-16 pb-6">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Bichitra Biswas Logo" className="w-[50px] h-auto drop-shadow-md" />
                        <div>
                            <h2 className="font-serif text-[22px] font-semibold text-gold2 tracking-wide">
                                Bichitra Biswas
                            </h2>
                            <div className="font-sans text-[11px] uppercase tracking-widest text-sage mt-1">
                                Vegetable Shop &middot; <span className="font-bengali tracking-normal normal-case text-sage/80">বিচিত্র বিশ্বাস</span>
                            </div>
                        </div>
                    </div>
                    <p className="font-sans text-sm text-center md:text-left text-sage leading-[1.8] mt-2 max-w-[300px]">
                        Quality wholesale and retail vegetable supplier serving Krishnanagar since 1990.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col md:items-center">
                    <div>
                        <h3 className="font-serif text-lg text-gold mb-6 uppercase tracking-widest">Quick Links</h3>
                        <nav className="flex flex-col gap-3 font-sans text-sm text-sage">
                            <Link href="#about" className="hover:text-gold2 transition-colors inline-block w-max">About Our Heritage</Link>
                            <Link href="#products" className="hover:text-gold2 transition-colors inline-block w-max">Premium Produce</Link>
                            <Link href="#services" className="hover:text-gold2 transition-colors inline-block w-max">Our Services</Link>
                            <Link href="#contact" className="hover:text-gold2 transition-colors inline-block w-max">Contact Us</Link>
                            <a href="https://wa.me/917076076485" target="_blank" rel="noopener noreferrer" className="text-gold mt-2 hover:text-gold2 font-bold transition-colors inline-block w-max">
                                &rarr; Order on WhatsApp
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Contact info */}
                <div className="flex flex-col md:items-end text-left md:text-right">
                    <div>
                        <h3 className="font-serif text-lg text-gold mb-6 uppercase tracking-widest">Connect</h3>
                        <address className="not-italic font-sans text-sm text-sage flex flex-col gap-3">
                            <p>Patra Bazar, M.M. Ghosh Street<br />Krishnanagar, WB 741101</p>
                            <p><a href="https://wa.me/917076076485" className="hover:text-gold2 transition-colors">+91 7076076485</a> (WA)</p>
                            <p><a href="tel:+919732711025" className="hover:text-gold2 transition-colors">+91 9732711025</a> (Call)</p>
                            <p className="text-gold2 mt-1">6:00 AM – 3:00 PM Daily</p>
                        </address>
                    </div>
                </div>

            </div>

            <div className="max-w-[1200px] mx-auto px-6 border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-sage/60 uppercase tracking-widest">
                <div>&copy; 2026 Bichitra Biswas Vegetable Shop &middot; Est. 1990</div>
                <div>All Rights Reserved</div>
            </div>
        </footer>
    );
}
