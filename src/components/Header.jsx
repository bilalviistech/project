import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#00246B] shadow-lg p-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-[#FF7F3E] text-2xl font-extrabold">
                    <img
                        src="https://testdeveloplink.com/document/wp-content/uploads/2024/12/mavdocs-logo-1.png"
                        alt="MavDocs Logo"
                        width={150}
                        height={150}
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Agreement
                    </button>
                    <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Affidavit
                    </button>
                    <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Customize Document
                    </button>
                    <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Stamp Paper
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
                    <button className="w-full text-left px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Agreement
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Affidavit
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Customize Document
                    </button>
                    <button className="w-full text-left px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Stamp Paper
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Header;
