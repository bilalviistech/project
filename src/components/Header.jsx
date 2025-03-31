import React from 'react'

const Header = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#00246B] shadow-lg">
            <div className="text-[#FF7F3E] text-2xl font-extrabold">BrandLogo</div>
            <div className="space-x-4">
                <button className="px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Coming Soon</button>
                <button className="px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Coming Soon</button>
                <button className="px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Coming Soon</button>
            </div>
        </nav>
    )
}

export default Header