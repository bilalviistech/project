import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaCogs, FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";

const OurService = () => {
    return (
        <div className="bg-blue-50 min-h-screen text-black">
            <Header />
            <div className="min-h-screen bg-white text-[#122136] font-sans px-6 md:px-24 py-16">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#003092] mb-4">
                        Our Services
                    </h1>
                    <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
                        Discover the range of professional legal documentation services we offer at MavDocs to simplify your legal needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Service 1 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-[#FF7F3E] p-4 rounded-full text-white text-2xl">
                                <FaCogs />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#003092] mb-2">Custom Document Drafting</h3>
                                <p className="text-gray-700">
                                    Get tailor-made agreements, affidavits, undertakings, and more. Our team ensures each document fits your exact legal and personal needs.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-[#FF7F3E] p-4 rounded-full text-white text-2xl">
                                <FaRocket />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#003092] mb-2">Fast Delivery</h3>
                                <p className="text-gray-700">
                                    We understand the urgency of legal matters. Receive your documents within hours—digitally or delivered to your doorstep.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-[#FF7F3E] p-4 rounded-full text-white text-2xl">
                                <FaUsers />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#003092] mb-2">Customer Support</h3>
                                <p className="text-gray-700">
                                    Need guidance? Our friendly support team is ready to assist you with your queries and walk you through each step of your document process.
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="flex items-start gap-5">
                            <div className="bg-[#FF7F3E] p-4 rounded-full text-white text-2xl">
                                <FaShieldAlt />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#003092] mb-2">Confidential & Secure</h3>
                                <p className="text-gray-700">
                                    Your privacy is our priority. All submitted data and documents are handled with strict confidentiality and stored securely.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold text-[#003092] mb-4">Need Something Specific?</h2>
                        <p className="text-gray-700 text-lg mb-6">
                            We offer flexible services for special legal document needs. Let us know your requirement, and we’ll handle the rest.
                        </p>
                        <a href="/contact" className="inline-block px-8 py-3 bg-[#FF7F3E] text-white rounded-lg hover:bg-orange-600 transition-all">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OurService;
