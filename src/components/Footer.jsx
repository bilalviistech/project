import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import whiteLogo from "@/assets/images/whiteLogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#112e5a] text-[#C6E7FF] py-16 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center md:text-left">
                {/* Brand & Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <Link to="/">
                        <img
                            src={whiteLogo}
                            alt="Logo"
                            width={250}
                            className="object-contain"
                        /></Link>
                    <p className="text-sm text-gray-300 mb-4">
                        <span className="font-extrabold">mavdocs.pk</span> is a legal tech platform and  not a law firm or accounting firm and does not provide legal, tax, or accounting advice. The content, materials, documents, and templates available on this website are intended solely for informational and educational purposes
                    </p>
                    <Link
                        to="/"
                        className="text-blue-400 hover:text-[#f5a623] transition-all duration-300 text-sm"
                    >
                        Read More
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-[#f5a623] transition-all text-sm">Home</Link></li>
                        <li><Link to="/about-us" className="hover:text-[#f5a623] transition-all text-sm">About</Link></li>
                        <li><Link to="/contact-us" className="hover:text-[#f5a623] transition-all text-sm">Contact</Link></li>
                    </ul>
                </div>

                {/* Our Services - NEW Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li><Link to="/privacy-policy" className="hover:text-[#f5a623] transition-all text-sm">Privacy Policy</Link></li>
                        <li><Link to="/return-exchange-policy" className="hover:text-[#f5a623] transition-all text-sm">Return & Exchange</Link></li>
                        <li><Link to="/delivery-tracking" className="hover:text-[#f5a623] transition-all text-sm">Delivery & Tracking</Link></li>
                        <li><Link to="/term-service" className="hover:text-[#f5a623] transition-all text-sm">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">📍 Karachi, Pakistan.</p>
                    <a href="mailto:info@mavdocs.pk" className="text-sm mb-2 hover:underline">📧 info@mavdocs.pk</a>
                    <a href="tel:+923001882235" className="text-sm mb-4 hover:underline">📞 +92 300 188 2235</a>

                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a href="https://www.facebook.com/mavdocspakistan" target="_blank" className="text-blue-400 hover:text-[#f5a623] text-2xl"><FaFacebook /></a>
                        <a href="https://www.tiktok.com/@mavdocspakistan" target="_blank" className="text-blue-400 hover:text-[#f5a623] text-2xl"><FaTiktok /></a>
                        <a href="https://pk.linkedin.com/company/mavdocs" target="_blank" className="text-blue-400 hover:text-[#f5a623] text-2xl"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/mavdocspakistan/" target="_blank" className="text-blue-400 hover:text-[#f5a623] text-2xl"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-300">
                <p>© 2025 BrandName. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
