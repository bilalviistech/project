import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#112e5a] shadow-lg p-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-[#f5a623] text-2xl font-extrabold">
                    <Link to="/"><img
                        src="https://testdeveloplink.com/document/wp-content/uploads/2024/12/mavdocs-logo-1.png"
                        alt="MavDocs Logo"
                        width={150}
                        height={150}
                    /></Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 pb-1 text-white rounded-lg shadow-md hover:bg-[#f5a623] transition-all">
                        Agreement
                    </button>
                    <button className="px-4 pb-1 text-white rounded-lg shadow-md hover:bg-[#f5a623] transition-all">
                        Affidavit
                    </button>
                    <button className="px-4 pb-1 text-white rounded-lg shadow-md hover:bg-[#f5a623] transition-all">
                        Finding your document?
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col mt-4 space-y-2">
                    <button className="w-full text-left px-4 py-2 bg-[#f5a623] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Agreement
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-[#f5a623] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Affidavit
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-[#f5a623] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Customize Document
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-[#f5a623] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Stamp Paper
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Header;
