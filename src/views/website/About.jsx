import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'
import { FaUsers, FaBullseye, FaCheckCircle } from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen text-black">
            <Header />
            <div className="bg-blue-50 text-gray-800 font-sans">
                {/* Hero Section */}
                <section className="bg-[#003092] text-white py-20 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Learn more about our journey, values, and what makes us the trusted choice for legal documentation services.
                    </p>
                </section>

                {/* Who We Are */}
                <section className="py-16 px-6 md:px-20 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-[#003092] mb-4">Who We Are</h2>
                        <p className="text-lg text-gray-600">
                            We are a dedicated team of legal professionals and tech enthusiasts committed to making legal documentation simple, reliable, and accessible to everyone. Our platform bridges the gap between people and complex paperwork by offering pre-drafted, customizable legal documents.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="bg-blue-100 py-16 px-6 md:px-20">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#003092] mb-3 flex items-center gap-2">
                                <FaBullseye className="text-[#f15722]" /> Our Mission
                            </h3>
                            <p className="text-gray-700 text-lg">
                                To empower individuals and businesses with easy access to legal documents by simplifying the process, reducing costs, and ensuring legal clarity.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#003092] mb-3 flex items-center gap-2">
                                <FaUsers className="text-[#f15722]" /> Our Vision
                            </h3>
                            <p className="text-gray-700 text-lg">
                                To become the leading platform for legal documentation, recognized for innovation, trust, and customer satisfaction across Pakistan and beyond.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 px-6 md:px-20 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-[#003092] mb-10">Why Choose Us</h2>
                        <div className="grid gap-10 md:grid-cols-3 text-left">
                            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                                <FaCheckCircle className="text-[#f15722] text-3xl mb-4" />
                                <h4 className="text-xl font-semibold text-[#003092]">Legally Verified Documents</h4>
                                <p className="text-gray-600 mt-2">
                                    Every document is drafted and reviewed by legal experts to ensure accuracy and legality.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                                <FaCheckCircle className="text-[#f15722] text-3xl mb-4" />
                                <h4 className="text-xl font-semibold text-[#003092]">Fast & Reliable Service</h4>
                                <p className="text-gray-600 mt-2">
                                    Receive your documents within hours—delivered right to your doorstep or inbox.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                                <FaCheckCircle className="text-[#f15722] text-3xl mb-4" />
                                <h4 className="text-xl font-semibold text-[#003092]">Customer-Centric Support</h4>
                                <p className="text-gray-600 mt-2">
                                    Our support team is always here to assist you with any queries, revisions, or guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default About