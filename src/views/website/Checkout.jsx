import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const timeSlotOptions = [
    { slot: "9:00 AM - 11:59 AM", price: 100 },
    { slot: "03:00 PM - 06:00 PM", price: 120 }
];
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYou from "@/components/ThankYou";

export default function Checkout() {
    const [selectedSlot, setSelectedSlot] = useState(timeSlotOptions[0]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handlePayment = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            navigate("/");
        }, 4000);
    };

    return (
        <div className="bg-blue-50 min-h-screen text-black">
            <Header />
            <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-10">
                <motion.h2
                    className="text-4xl font-extrabold text-center text-indigo-600"
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Checkout Page
                </motion.h2>

                {/* Product Info */}
                <MotionCard>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Product Information</h3>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <img
                            src="/product.jpg"
                            alt="Product"
                            className="w-32 h-32 rounded-xl shadow-md"
                        />
                        <div>
                            <h4 className="text-lg font-bold text-gray-800">Premium Service Package</h4>
                            <p className="text-gray-500">Includes full support and 2 free revisits</p>
                            <p className="text-green-600 font-semibold mt-2">Base Price: $150</p>
                        </div>
                    </div>
                </MotionCard>

                {/* Customer Info */}
                <MotionCard>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customer Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Full Name" />
                        <Input placeholder="Email Address" />
                        <Input placeholder="Phone Number" />
                        <Input placeholder="Address" />
                    </div>
                </MotionCard>

                {/* Payment Option */}
                <MotionCard>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Select Payment Method</h3>
                    <div className="flex flex-col gap-4">
                        {["Credit/Debit Card", "PayPal", "Cash on Delivery"].map((method, idx) => (
                            <label key={idx} className="flex items-center gap-3 cursor-pointer text-gray-700">
                                <input type="radio" name="payment" className="accent-indigo-600" />
                                {method}
                            </label>
                        ))}
                    </div>
                </MotionCard>

                {/* Time Slot + Price Update */}
                <MotionCard>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Choose Time Slot</h3>
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                        <select
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            onChange={(e) =>
                                setSelectedSlot(
                                    timeSlotOptions.find((slot) => slot.slot === e.target.value)
                                )
                            }
                        >
                            {timeSlotOptions.map((slot, index) => (
                                <option key={index} value={slot.slot}>
                                    {slot.slot}
                                </option>
                            ))}
                        </select>
                        <motion.div
                            className="text-xl font-bold text-indigo-700"
                            key={selectedSlot.price}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Updated Price: ${selectedSlot.price}
                        </motion.div>
                    </div>
                </MotionCard>

                {/* Submit Button */}
                <motion.div
                    className="text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <button
                        onClick={handlePayment}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-indigo-700 transition-all"
                    >
                        Complete Payment
                    </button>
                </motion.div>

                {/* Success Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <motion.div
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
                        >
                            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful 🎉</h2>
                            <p className="text-gray-600">Redirecting you in a few seconds...</p>
                            <div className="mt-4">
                                <svg
                                    className="mx-auto w-16 h-16 text-green-500 animate-pulse"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

// Input Component
function Input({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
    );
}

// Animated Card Wrapper
function MotionCard({ children }) {
    return (
        <motion.div
            className="bg-white shadow-xl rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
