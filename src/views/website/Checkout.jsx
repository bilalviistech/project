import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Checkout() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        cnic: ""
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);

        // Show Modal
        setIsModalOpen(true);

        // 3 seconds baad modal close ho jaye
        setTimeout(() => {
            navigate('/')
            setIsModalOpen(false);
        }, 3000);
    };

    return (
        <>
        <Header/>
            <div className="bg-[#003092] min-h-screen flex flex-col items-center p-6 text-white">
                <h2 className="text-3xl font-bold mb-6">Checkout</h2>

                <div className="bg-white text-black w-full max-w-3xl p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-3 border rounded" required />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded" required />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded" required />
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-3 border rounded" required />
                        <div className="flex gap-4">
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-1/2 p-3 border rounded" required />
                            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="w-1/2 p-3 border rounded" required />
                        </div>
                        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full p-3 border rounded" required />
                        <input type="text" name="cnic" placeholder="CNIC" value={formData.cnic} onChange={handleChange} className="w-full p-3 border rounded" required />

                        <div className="bg-gray-100 p-4 rounded mt-4">
                            <h3 className="text-lg font-semibold mb-2">Terms & Conditions</h3>
                            <p className="text-sm text-gray-600">By proceeding with this order, you agree to our terms and conditions, including refund and privacy policies.</p>
                        </div>

                        <button type="submit" className="w-full bg-[#FF7F3E] text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition">Confirm & Proceed</button>
                    </form>
                </div>

                {/* Modal with Animation */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white text-black p-6 rounded-xl shadow-lg text-center"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                <p>Your order has been received.</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </>

    );
}
