import React from 'react';
import { FaComments, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
    return (
        <div>
            <Header/>
            <section className="px-6 py-12 max-w-5xl mx-auto text-center">
                {/* Top 3 Info Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <FaComments className="text-orange-500 text-4xl mx-auto mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Chat with us</h3>
                        <p className="text-sm text-gray-600">Get help online or visit our FAQs for more answers.</p>
                    </div>

                    <div>
                        <FaPhoneAlt className="text-orange-500 text-4xl mx-auto mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Call us</h3>
                        <p className="text-sm text-gray-600">Reach customer support at <strong>+92.300 188.2235</strong>,<br />Mon – Fri, 8am – 6pm.</p>
                        <p className="text-orange-600 mt-1 font-medium">Call customer support</p>
                    </div>

                    <div>
                        <FaEnvelope className="text-orange-500 text-4xl mx-auto mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Email us</h3>
                        <p className="text-sm text-gray-600">Need more information?<br />Send us a message.</p>
                        <p className="text-orange-600 mt-1 font-medium">Send message</p>
                    </div>
                </div>

                {/* Email Form */}
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-md border max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-2 text-[#112e5a]">Email us</h2>
                    <p className="text-gray-700 mb-6">Send a message to our custom support team.</p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name / Last Name */}
                        <input type="text" placeholder="First name" className="border rounded px-4 py-2" required />
                        <input type="text" placeholder="Last name" className="border rounded px-4 py-2" required />

                        {/* Email - full width */}
                        <input type="email" placeholder="Email" className="md:col-span-2 border rounded px-4 py-2" required />

                        {/* Subject dropdown */}
                        <select className="md:col-span-2 border rounded px-4 py-2" required>
                            <option value="">Select Subject</option>
                            <option>Document Assistance</option>
                            <option>Order Tracking</option>
                            <option>Refund Request</option>
                        </select>

                        {/* Message box */}
                        <textarea rows={4} placeholder="Message" className="md:col-span-2 border rounded px-4 py-2" required />

                        {/* reCAPTCHA placeholder */}
                        <div className="md:col-span-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" required />
                                <span>I’m not a robot</span>
                            </label>
                            {/* You can replace this with actual reCAPTCHA later */}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition">
                            Submit
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-700">
                        Or call us at <span className="text-orange-600 font-semibold">+92.300 188 2235</span>
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Contact;
