import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaCommentDots } from 'react-icons/fa';

const InputWithIcon = ({ icon: Icon, ...props }) => (
    <div className="flex items-center border rounded-lg px-4 py-2 shadow-sm focus-within:ring-2 ring-blue-200 transition-all bg-white">
        <Icon className="text-gray-500 mr-3" />
        <input {...props} className="w-full outline-none bg-transparent text-sm" />
    </div>
);

const Checkout = () => {
    return (
        <div>
            <Header/>
            <div className="w-full min-h-screen bg-gradient-to-br flex justify-center p-4">
                <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
                        <div className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                            📄 Rent Agreement <span className="text-gray-500 text-sm">x1</span>
                        </div>
                        <div className="flex gap-2 mt-3 sm:mt-0">
                            <button className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">Today</button>
                            <button className="px-5 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition">Tomorrow</button>
                        </div>
                    </div>

                    {/* Main Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Form Section */}
                        <div className="space-y-5">
                            <h2 className="text-lg font-bold text-gray-700">Enter Your Details</h2>

                            <InputWithIcon icon={FaUser} type="text" placeholder="Full Name" />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <InputWithIcon icon={FaPhone} type="tel" placeholder="Phone Number" />
                                <InputWithIcon icon={FaPhone} type="tel" placeholder="Alternative Phone" />
                            </div>
                            <InputWithIcon icon={FaMapMarkerAlt} type="text" placeholder="Full Address" />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                                    <FaMapMarkerAlt className="text-gray-500 mr-3" />
                                    <select className="w-full outline-none bg-transparent text-sm">
                                        <option>Select Area</option>
                                        <option>Area A</option>
                                        <option>Area B</option>
                                    </select>
                                </div>
                                <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                                    <FaCity className="text-gray-500 mr-3" />
                                    <select className="w-full outline-none bg-transparent text-sm">
                                        <option>Select City</option>
                                        <option>City X</option>
                                        <option>City Y</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-start border rounded-lg px-4 py-2 bg-white shadow-sm">
                                <FaCommentDots className="text-gray-500 mr-3 mt-1" />
                                <textarea placeholder="Any Message..." className="w-full outline-none bg-transparent resize-none h-24 text-sm"></textarea>
                            </div>
                        </div>

                        {/* Delivery Time & Payment Options */}
                        <div className="space-y-8">
                            {/* Delivery Time */}
                            <div>
                                <h2 className="text-lg font-bold text-gray-700 mb-2">Choose Delivery Time</h2>
                                <div className="space-y-3 text-sm text-gray-700">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="time" className="accent-blue-500" />
                                        12 PM – 3 PM (Free)
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="time" className="accent-blue-500" />
                                        3 PM – 6 PM (Free)
                                    </label>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div>
                                <h2 className="text-lg font-bold text-gray-700 mb-2">Select Payment Method</h2>
                                <div className="space-y-3 text-sm text-gray-700">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="payment" className="accent-green-500" /> EasyPaisa
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="payment" className="accent-green-500" /> JazzCash
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="payment" className="accent-green-500" /> COD (Cash on Delivery)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                        <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full text-lg font-bold shadow-md transition-all">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Checkout;
