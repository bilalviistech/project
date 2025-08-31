// components/ThankYou.jsx
import React from 'react';

const ThankYou = ({ heading, descp }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-xl text-center max-w-sm w-full relative">
                <h1 className="text-3xl font-bold text-[#f5a623] mb-3">{heading}</h1>
                <p className="text-black">{descp}</p>
            </div>
        </div>
    );
};

export default ThankYou;
