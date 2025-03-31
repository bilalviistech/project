import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-[#00246B] text-[#C6E7FF] py-8">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

                {/* Brand & Logo */}
                <div>
                    <FaUsers className="text-4xl mx-auto md:mx-0 text-[#FF7F3E]" />
                    <h2 className="text-2xl font-bold mt-2">BrandName</h2>
                    <p className="mt-2 text-sm text-gray-300">Discover quality products at the best prices.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-orange-400 transition">About</Link></li>
                        <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-orange-400 transition">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm">📍 123 Street, City, Country</p>
                    <p className="text-sm">📧 support@brandname.com</p>
                    <p className="text-sm">📞 +123 456 7890</p>
                </div>
            </div>

            {/* Copyright & Social Links */}
            <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm text-gray-300">
                <p>© 2025 BrandName. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer