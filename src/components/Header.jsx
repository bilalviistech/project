import React from 'react'

const Header = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#00246B] shadow-lg">
            <div className="text-[#FF7F3E] text-2xl font-extrabold">
                <img src="https://testdeveloplink.com/document/wp-content/uploads/2024/12/mavdocs-logo-1.png" alt="" srcset="" width={150} height={150} />
            </div>
            <div className="space-x-4">
                <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Agreement</button>
                <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Affidavit</button>
                <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Customzie Document</button>
                <button className="px-4 pb-1 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">Stamp Paper</button>
            </div>
        </nav>
    )
}

export default Header