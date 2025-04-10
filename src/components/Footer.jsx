import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#00246B] text-[#C6E7FF] py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Brand & Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <img src="https://testdeveloplink.com/document/wp-content/uploads/2024/12/mavdocs-logo-1.png" alt="" width={250} />
                    <p className="text-sm text-gray-300 mb-4">
                        Discover quality products at the best prices.
                    </p>
                    <Link
                        to="/"
                        className="text-blue-400 hover:text-orange-400 transition-all duration-300 text-sm"
                    >
                        Visit Our Store
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-orange-400 transition-all duration-300 text-sm"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-orange-400 transition-all duration-300 text-sm"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-orange-400 transition-all duration-300 text-sm"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy-policy"
                                className="hover:text-orange-400 transition-all duration-300 text-sm"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/terms"
                                className="hover:text-orange-400 transition-all duration-300 text-sm"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">📍 123 Street, City, Country</p>
                    <p className="text-sm mb-2">📧 support@brandname.com</p>
                    <p className="text-sm mb-4">📞 +123 456 7890</p>

                    <div className="flex space-x-4 justify-center">
                        <a
                            href="#"
                            className="text-blue-400 hover:text-orange-400 transition-all duration-300 text-2xl"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            className="text-blue-400 hover:text-orange-400 transition-all duration-300 text-2xl"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="text-blue-400 hover:text-orange-400 transition-all duration-300 text-2xl"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright & Social Links */}
            <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-300">
                <p>© 2025 BrandName. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
