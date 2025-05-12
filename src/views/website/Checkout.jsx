'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaCommentDots } from 'react-icons/fa';
import productImg from '@/assets/images/productImg.jpg';

const InputWithIcon = ({ icon: Icon, ...props }) => (
    <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm focus-within:ring-2 ring-orange-400 transition-all">
        <Icon className="text-blue-600 mr-3" />
        <input {...props} className="w-full outline-none bg-transparent text-sm" />
    </div>
);

const Checkout = () => {
    const [day, setDay] = useState('today');
    const [price, setPrice] = useState(100);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [jazzCashNumber, setJazzCashNumber] = useState('');

    const handleDayChange = (value) => {
        setDay(value);
        setPrice(value === 'tomorrow' ? 200 : 100);
    };

    return (
        <div>
            <Header />
            <div className="w-full min-h-screen bg-gray-50 flex justify-center py-10 px-4">
                <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 xl:grid-cols-2">

                    {/* Left Side: Product + Form */}
                    <div className="p-6 md:p-10 space-y-6 border-r border-gray-200">
                        {/* Product Summary */}
                        {/* Product Summary for large screens */}
                        <div className="hidden sm:flex items-start sm:items-center gap-5 border-b pb-6">
                            <img src={productImg} alt="Contract" className="w-28 h-28 object-cover rounded-xl border" />
                            <div>
                                <h3 className="text-xl font-semibold text-blue-900">Rent Agreement</h3>
                                <p className="text-gray-600 text-sm">Includes stamp paper + home delivery</p>
                                <div className="mt-2 text-orange-500 font-bold text-lg">
                                    PKR {price}
                                </div>
                            </div>
                        </div>

                        {/* Product Summary for small screens - fixed bottom */}
                        <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg px-4 py-3 flex items-center gap-4 z-50 border-t">
                            <img src={productImg} alt="Contract" className="w-20 h-20 object-cover rounded-lg border" />
                            <div className="flex flex-col">
                                <h3 className="text-base font-semibold text-blue-900">Rent Agreement</h3>
                                <p className="text-gray-600 text-xs">Stamp paper + home delivery</p>
                                <div className="mt-1 text-orange-500 font-bold text-sm">
                                    PKR {price}
                                </div>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4">
                            <InputWithIcon icon={FaUser} type="text" placeholder="Full Name" />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <InputWithIcon icon={FaPhone} type="tel" placeholder="Phone Number" />
                                <InputWithIcon icon={FaPhone} type="tel" placeholder="Alternative Phone" />
                            </div>
                            <InputWithIcon icon={FaMapMarkerAlt} type="text" placeholder="Full Address" />

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                                    <FaMapMarkerAlt className="text-blue-600 mr-3" />
                                    <select className="w-full outline-none bg-transparent text-sm">
                                        <option>Select Area</option>
                                        <option>Area A</option>
                                        <option>Area B</option>
                                    </select>
                                </div>
                                <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                                    <FaCity className="text-blue-600 mr-3" />
                                    <select className="w-full outline-none bg-transparent text-sm">
                                        <option>Select City</option>
                                        <option>City X</option>
                                        <option>City Y</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-start border rounded-lg px-4 py-2 bg-white shadow-sm">
                                <FaCommentDots className="text-blue-600 mr-3 mt-1" />
                                <textarea placeholder="Any Message..." className="w-full outline-none bg-transparent resize-none h-24 text-sm"></textarea>
                            </div>

                            {/* JazzCash Mobile Field */}
                            {paymentMethod === 'JazzCash' && (
                                <div className="transition-all duration-300 ease-in-out">
                                    <InputWithIcon
                                        icon={FaPhone}
                                        type="tel"
                                        placeholder="JazzCash Mobile Number"
                                        value={jazzCashNumber}
                                        onChange={(e) => setJazzCashNumber(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Options & Submit */}
                    <div className="bg-gradient-to-b from-blue-50 via-white to-orange-50 p-6 md:p-10 flex flex-col justify-between gap-6">
                        {/* Delivery Time Section */}
                        <div className="bg-white rounded-xl shadow p-6">
                            <h2 className="text-lg font-bold text-gray-700 mb-3">Choose Delivery Time</h2>
                            <div className="mt-2 min-[510px]:flex gap-3 max-[500px]:block max-[500px]:w-full">
                                <button
                                    type="button"
                                    onClick={() => handleDayChange("today")}
                                    className={`px-4 py-2 text-sm rounded border w-full max-[510px]:mb-2 ${day === "today"
                                            ? "bg-orange-500 text-white border-orange-500"
                                            : "bg-white text-gray-700 border-gray-300"
                                        }`}
                                >
                                    Deliver Tomorrow (PKR 100)
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDayChange("tomorrow")}
                                    className={`px-4 py-2 text-sm rounded border w-full ${day === "tomorrow"
                                            ? "bg-orange-500 text-white border-orange-500"
                                            : "bg-white text-gray-700 border-gray-300"
                                        }`}
                                >
                                    Deliver Today (PKR 200)
                                </button>
                            </div>

                            <div className="space-y-3 text-sm mt-4">
                                {day === 'tomorrow' && (
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="time" className="accent-blue-500" /> 12 PM – 3 PM (Free)
                                    </label>
                                )}
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="time" className="accent-blue-500" /> 3 PM – 6 PM (Free)
                                </label>
                            </div>
                        </div>

                        {/* Payment Method Section */}
                        <div className="bg-white rounded-xl shadow p-6">
                            <h2 className="text-lg font-bold text-gray-700 mb-3">Payment Method</h2>
                            <div className="space-y-3 text-sm">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="JazzCash"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="accent-orange-500"
                                    />
                                    JazzCash
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="COD"
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="accent-orange-500"
                                    />
                                    COD (Cash on Delivery)
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-lg font-bold shadow-md transition-all">
                                Place Order – PKR {price}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;