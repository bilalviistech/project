// 'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaCommentDots } from 'react-icons/fa';
import productImg from '@/assets/images/productImg.jpg';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const InputWithIcon = ({ icon: Icon, ...props }) => (
    <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm focus-within:ring-2 ring-orange-400 transition-all">
        <Icon className="text-blue-600 mr-3" />
        <input {...props} className="w-full outline-none bg-transparent text-sm" />
    </div>
);

const Checkout = () => {
    const [day, setDay] = useState('');
    const [price, setPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [jazzCashNumber, setJazzCashNumber] = useState('');
    const [formData, setFormData] = useState({
        userName: '',
        userPhoneNumber: '',
        userAddress: '',
        userCity: 'Karachi',
        userMessage: '',
        deliveryTime: ''
    });
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state?.product;
    const selectedPrice = location.state?.selectedPrice;
    const subcategory = location.state?.subcategory;
    const category = location.state?.category;

    const handleDayChange = (value) => {
        setDay(value);
        setPrice(value === 'today' ? 200 : 0);
    };

    // Get current time using Moment.js
    const currentTime = moment();
    const isAfter12PM = currentTime.isAfter(moment('12:00', 'HH:mm'));
    const isAfter3PM = currentTime.isAfter(moment('15:00', 'HH:mm'));

    // Determine if slots should be disabled for "today"
    const is12to3Disabled = day === 'today' && isAfter12PM;
    const is3to6Disabled = day === 'today' && isAfter3PM;

    useEffect(() => {
        if (!product || !selectedPrice || !subcategory) {
            navigate('/');
        }
    }, [product, selectedPrice, navigate, subcategory]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDeliveryTimeChange = (e) => {
        setFormData((prev) => ({ ...prev, deliveryTime: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!day) {
            toast.error('Please select a delivery day (Today or Tomorrow).');
            return;
        }
        if (!formData.userName || !formData.userPhoneNumber || !formData.userAddress || !formData.deliveryTime || !paymentMethod) {
            toast.error('Please fill in all required fields: Full Name, Phone Number, Address, Delivery Time, and Payment Method.');
            return;
        }
        if (paymentMethod === 'JazzCash' && !jazzCashNumber) {
            toast.error('Please provide a JazzCash Mobile Number.');
            return;
        }

        const submissionData = {
            ...formData,
            paymentMethod,
            jazzCashNumber: paymentMethod === 'JazzCash' ? jazzCashNumber : '',
            deliveryDay: day,
            totalPrice: selectedPrice.price + price,
            product: subcategory.name
        };

        let data = JSON.stringify({
            "docName": product.title,
            "docCategory": category.categoryName,
            "docSubCategory": subcategory.name,
            "userName": submissionData.userName,
            "userPhoneNumber": submissionData.userPhoneNumber,
            "userCity": submissionData.userCity,
            "userMessage": submissionData.userMessage,
            "userAddress": submissionData.userAddress,
            "paymentMethod": submissionData.paymentMethod,
            "deliverySlot": submissionData.deliveryDay,
            "deliveryTime": submissionData.deliveryTime,
            "totalPrice": (selectedPrice.price + price),
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://mavdocsbackend-production.up.railway.app/api/order',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                toast.success('Order placed successfully');
                navigate('/');
            })
            .catch((error) => {
                toast.error('Something went wrong. Please try again.');
                console.log(error);
            });
    };

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            {product && selectedPrice && (
                <div>
                    <Header />
                    <div className="w-full min-h-screen bg-gray-50 flex justify-center py-10 px-4">
                        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 xl:grid-cols-2">
                            {/* Left Side: Product + Form */}
                            <div className="p-6 md:p-10 space-y-6 border-r border-gray-200">
                                {/* Product Summary */}
                                {/* Product Summary for large screens */}
                                <div className="hidden sm:flex items-start sm:items-center gap-5 border-b pb-6">
                                    <img src={product.url} alt="Contract" className="w-28 h-28 object-cover rounded-xl border" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-900">{product.title}</h3>
                                        <p className="text-gray-600 text-sm">Includes stamp paper + home delivery</p>
                                        <div className="mt-2 text-orange-500 font-bold text-lg">
                                            PKR {selectedPrice.price}
                                        </div>
                                    </div>
                                </div>

                                {/* Product Summary for small screens - fixed bottom */}
                                <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg px-4 py-3 flex items-center gap-4 z-50 border-t">
                                    <img src={productImg} alt="Contract" className="w-20 h-20 object-cover rounded-lg border" />
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-semibold text-blue-900">{subcategory.name}</h3>
                                        <p className="text-gray-600 text-xs">Stamp paper + home delivery</p>
                                        <div className="mt-1 text-orange-500 font-bold text-sm">
                                            PKR {selectedPrice.price + price}
                                        </div>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <form id="checkoutForm" onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <h1 className="font-bold text-lg text-blue-900">Enter Detail</h1>
                                        <InputWithIcon
                                            icon={FaUser}
                                            type="text"
                                            name="userName"
                                            placeholder="Full Name"
                                            value={formData.userName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <InputWithIcon
                                            icon={FaPhone}
                                            type="tel"
                                            name="userPhoneNumber"
                                            placeholder="Phone Number"
                                            value={formData.userPhoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <InputWithIcon
                                            icon={FaMapMarkerAlt}
                                            type="text"
                                            name="userAddress"
                                            placeholder="Full Address"
                                            value={formData.userAddress}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm w-full">
                                                <FaCity className="text-blue-600 mr-3" />
                                                <select
                                                    name="userCity"
                                                    value={formData.userCity}
                                                    onChange={handleInputChange}
                                                    className="w-full outline-none bg-transparent text-sm"
                                                    required
                                                >
                                                    <option value="Karachi">Karachi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-start border rounded-lg px-4 py-2 bg-white shadow-sm">
                                            <FaCommentDots className="text-blue-600 mr-3 mt-1" />
                                            <textarea
                                                name="userMessage"
                                                placeholder="Any Message..."
                                                className="w-full outline-none bg-transparent resize-none h-24 text-sm"
                                                value={formData.userMessage}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        {/* JazzCash Mobile Field */}
                                        {/* {paymentMethod === 'JazzCash' && (
                                            <div className="transition-all duration-300 ease-in-out">
                                                <InputWithIcon
                                                    icon={FaPhone}
                                                    type="tel"
                                                    placeholder="JazzCash Mobile Number"
                                                    value={jazzCashNumber}
                                                    onChange={(e) => setJazzCashNumber(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        )} */}
                                    </div>

                                    {/* Right Side: Options & Submit */}
                                    <div className="bg-gradient-to-b from-blue-50 via-white to-orange-50 p-6 md:p-10 flex flex-col justify-between gap-6 xl:hidden">
                                        {/* Delivery Time Section */}
                                        <div className="bg-white rounded-xl shadow p-6">
                                            <h2 className="text-lg font-bold text-gray-700 mb-3">Choose Delivery Time</h2>
                                            <div className="mt-2 min-[510px]:flex gap-3 max-[500px]:block max-[500px]:w-full">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDayChange('today')}
                                                    className={`px-4 py-2 text-sm rounded border w-full max-[510px]:mb-2 ${day === 'today'
                                                        ? 'bg-orange-500 text-white border-orange-500'
                                                        : 'bg-white text-gray-700 border-gray-300'
                                                        }`}
                                                >
                                                    Deliver Today (PKR 200)
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDayChange('tomorrow')}
                                                    className={`px-4 py-2 text-sm rounded border w-full ${day === 'tomorrow'
                                                        ? 'bg-orange-500 text-white border-orange-500'
                                                        : 'bg-white text-gray-700 border-gray-300'
                                                        }`}
                                                >
                                                    Deliver Tomorrow
                                                </button>
                                            </div>
                                            <div className="space-y-3 text-sm mt-4">
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="deliveryTime"
                                                        value="12 PM - 3 PM"
                                                        onChange={handleDeliveryTimeChange}
                                                        className="accent-blue-500"
                                                        disabled={is12to3Disabled}
                                                        required
                                                    />
                                                    12 PM – 3 PM (Free)
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="deliveryTime"
                                                        value="3 PM - 6 PM"
                                                        onChange={handleDeliveryTimeChange}
                                                        className="accent-blue-500"
                                                        disabled={is3to6Disabled}
                                                        required
                                                    />
                                                    3 PM – 6 PM (Free)
                                                </label>
                                            </div>
                                        </div>

                                        {/* Payment Method Section */}
                                        <div className="bg-white rounded-xl shadow p-6">
                                            <h2 className="text-lg font-bold text-gray-700 mb-3">Payment Method</h2>
                                            <div className="space-y-3 text-sm">
                                                {/* <label className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="JazzCash"
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                        className="accent-orange-500"
                                                        required
                                                    />
                                                    JazzCash
                                                </label> */}
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="cash"
                                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                                        className="accent-orange-500"
                                                        required
                                                    />
                                                    COD (Cash on Delivery)
                                                </label>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-lg font-bold shadow-md transition-all"
                                            >
                                                Place Order – PKR {selectedPrice.price + price}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Right Side: Options & Submit (for large screens) */}
                            <div className="hidden xl:flex bg-gradient-to-b from-blue-50 via-white to-orange-50 p-6 md:p-10 flex-col justify-between gap-6">
                                {/* Delivery Time Section */}
                                <div className="bg-white rounded-xl shadow p-6">
                                    <h2 className="text-lg font-bold text-gray-700 mb-3">Choose Delivery Time</h2>
                                    <div className="mt-2 min-[510px]:flex gap-3 max-[500px]:block max-[500px]:w-full">
                                        <button
                                            type="button"
                                            onClick={() => handleDayChange('today')}
                                            className={`px-4 py-2 text-sm rounded border w-full max-[510px]:mb-2 ${day === 'today'
                                                ? 'bg-orange-500 text-white border-orange-500'
                                                : 'bg-white text-gray-700 border-gray-300'
                                                }`}
                                        >
                                            Deliver Today (PKR 200)
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDayChange('tomorrow')}
                                            className={`px-4 py-2 text-sm rounded border w-full ${day === 'tomorrow'
                                                ? 'bg-orange-500 text-white border-orange-500'
                                                : 'bg-white text-gray-700 border-gray-300'
                                                }`}
                                        >
                                            Deliver Tomorrow
                                        </button>
                                    </div>
                                    <div className="space-y-3 text-sm mt-4">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="deliveryTime"
                                                value="12 PM - 3 PM"
                                                onChange={handleDeliveryTimeChange}
                                                className="accent-blue-500"
                                                disabled={is12to3Disabled}
                                                required
                                            />
                                            12 PM – 3 PM (Free)
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="deliveryTime"
                                                value="3 PM - 6 PM"
                                                onChange={handleDeliveryTimeChange}
                                                className="accent-blue-500"
                                                disabled={is3to6Disabled}
                                                required
                                            />
                                            3 PM – 6 PM (Free)
                                        </label>
                                    </div>
                                </div>

                                {/* Payment Method Section */}
                                <div className="bg-white rounded-xl shadow p-6">
                                    <h2 className="text-lg font-bold text-gray-700 mb-3">Payment Method</h2>
                                    <div className="space-y-3 text-sm">
                                        {/* <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="JazzCash"
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="accent-orange-500"
                                                required
                                            />
                                            JazzCash
                                        </label> */}
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value="cash"
                                                onChange={(e) => setPaymentMethod(e.target.value)}
                                                className="accent-orange-500"
                                                required
                                            />
                                            COD (Cash on Delivery)
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        form="checkoutForm"
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full text-lg font-bold shadow-md transition-all"
                                    >
                                        Place Order – PKR {selectedPrice.price + price}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Checkout;