import React from "react";
import { ShieldCheck, FileText, Lock } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
    return (
        <div className="bg-blue-50 min-h-screen text-black">
            <Header />
            <div className="bg-blue-50 text-[#122136] min-h-screen p-6 md:p-16 font-sans">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003092] mb-6 flex items-center gap-3">
                        <Lock className="text-[#f15722] w-10 h-10" /> Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-700 mb-10">
                        Your privacy is very important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                            <ShieldCheck className="text-[#003092]" /> 1. Information We Collect
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Personal information such as your name, email, phone number, and address.</li>
                            <li>Device and browser details when you access our site.</li>
                            <li>Usage data such as visited pages and time spent.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                            <FileText className="text-[#003092]" /> 2. How We Use Your Information
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>To improve our website and services.</li>
                            <li>To communicate with you regarding your orders or inquiries.</li>
                            <li>To comply with legal obligations and prevent fraud.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                            <ShieldCheck className="text-[#003092]" /> 3. Data Security
                        </h2>
                        <p className="text-gray-700">
                            We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                            <FileText className="text-[#003092]" /> 4. Cookies
                        </h2>
                        <p className="text-gray-700">
                            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can disable cookies in your browser settings.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                            <Lock className="text-[#003092]" /> 5. Third-Party Services
                        </h2>
                        <p className="text-gray-700">
                            We may use third-party services for analytics, payment processing, or advertising. These services have their own privacy policies which we recommend you review.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                            <FileText className="text-[#003092]" /> 6. Changes to This Policy
                        </h2>
                        <p className="text-gray-700">
                            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
