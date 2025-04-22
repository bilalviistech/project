import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaLock, FaEnvelope, FaShieldAlt, FaGlobe, FaCookieBite, FaTrash, FaExclamationTriangle } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div>
            <Header/>
            <section className="bg-gradient-to-br px-4 py-12 md:px-10 lg:px-24 text-[#1f2937]">
                <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-orange-600 flex items-center gap-3">
                        <FaLock className="text-orange-500" /> Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-sm mb-6">Effective Date: 16-04-2025</p>

                    <p className="text-gray-700 mb-6">
                        MavDocs understands the importance of maintaining your privacy. We value your trust and are committed to protecting your personal information. By visiting and/or using our website, <a href="https://www.mavdocs.com" className="text-blue-600 underline">www.mavdocs.com</a>, you agree to the practices described in this Privacy Policy.
                    </p>

                    <div className="space-y-10">

                        {/* Information We Collect */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaShieldAlt /> Information We Collect
                            </h2>
                            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Contact Information:</strong> Name, email, phone, alternate number, and address when you purchase services.</li>
                                <li><strong>Payment & Billing:</strong> Billing name and address (card details are never stored).</li>
                                <li><strong>Other Info:</strong> IP, browser type, access time, viewed pages for analytics.</li>
                            </ul>
                        </div>

                        {/* Use of Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaGlobe /> Use of Your Information
                            </h2>
                            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                                <li>Process and fulfill your orders.</li>
                                <li>Communicate regarding your orders and services.</li>
                                <li>Send promotional emails and SMS.</li>
                                <li>Analyze website usage to improve services.</li>
                                <li>Personalize your experience.</li>
                            </ul>
                        </div>

                        {/* Data Retention */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaTrash /> Data Retention & Deletion
                            </h2>
                            <p className="text-gray-700 mt-2">
                                Personal data submitted via forms is deleted within <strong>7 days</strong> after delivery. However, delivery-related contact info may be kept for marketing and analytics unless you opt out.
                            </p>
                        </div>

                        {/* Cookies */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaCookieBite /> Cookies & Tracking Technologies
                            </h2>
                            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                                <li>Enhance performance.</li>
                                <li>Analyze behavior.</li>
                                <li>Personalize content and ads.</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-2">
                                You can disable cookies in your browser settings. Some features may not work as expected.
                            </p>
                        </div>

                        {/* Security */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaShieldAlt /> Security of Personal Data
                            </h2>
                            <p className="text-gray-700 mt-2">
                                We use industry-standard security to protect your data, including encryption and firewalls. However, no method is 100% secure.
                            </p>
                        </div>

                        {/* Third Party Sites */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaGlobe /> Third-Party Sites
                            </h2>
                            <p className="text-gray-700 mt-2">
                                Our website may contain links to other websites. This Privacy Policy doesn’t cover them. Please review their privacy terms separately.
                            </p>
                        </div>

                        {/* Public Disclosure Warning */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex gap-3 items-start">
                            <FaExclamationTriangle className="text-yellow-600 mt-1" />
                            <p className="text-sm text-gray-800">
                                <strong>Important:</strong> Avoid disclosing personal details publicly on our website or social platforms. MavDocs is not responsible for data shared openly by users.
                            </p>
                        </div>

                        {/* Promotional Consent */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaEnvelope /> Promotional Communications
                            </h2>
                            <p className="text-gray-700 mt-2">
                                By providing your contact info, you agree to receive promotional emails/SMS from MavDocs. You can opt out anytime by contacting us.
                            </p>
                        </div>

                        {/* Changes */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaLock /> Changes to Privacy Policy
                            </h2>
                            <p className="text-gray-700 mt-2">
                                This policy may be updated. Any changes will appear here with the latest effective date. Please check periodically.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                                <FaEnvelope /> Contact Us
                            </h2>
                            <ul className="mt-2 space-y-1 text-gray-700">
                                <li><strong>Email:</strong> <a href="mailto:info@mavdocs.com" className="underline text-blue-600">info@mavdocs.com</a></li>
                                <li><strong>Website:</strong> <a href="https://www.mavdocs.com" className="underline text-blue-600">www.mavdocs.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;
