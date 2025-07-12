import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaGavel, FaShieldAlt, FaGlobeAsia, FaBalanceScale, FaExternalLinkAlt, FaExclamationCircle } from 'react-icons/fa';

const OurService = () => {
    return (
        <div>
            <Header />
            <section className="bg-gradient-to-br px-4 py-12 md:px-10 lg:px-24 text-[#1f2937]">
                <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600 flex items-center gap-3">
                        <FaGavel className="text-orange-500" /> Terms of Service
                    </h1>

                    {/* Disclaimer: No Legal Advice */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaShieldAlt /> No Warranties or Legal Representation
                        </h2>
                        <p className="mt-2 text-gray-700">
                            While the information on this site concerns legal matters, it does <strong>not constitute legal advice</strong> or representation. MavDocs is <strong>not a law firm</strong> and is not authorized to provide legal consultation to any user.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Using this site does <strong>not create an attorney-client relationship</strong> between you and MavDocs or its team. All content and functionality are provided on an <em>"as is"</em> basis without any warranties or guarantees regarding accuracy or jurisdiction-specific applicability.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Services may be modified or discontinued at any time without prior notice.
                        </p>
                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex items-start gap-3">
                            <FaExclamationCircle className="text-yellow-600 mt-1" />
                            <p className="text-sm text-gray-800">
                                MavDocs disclaims all liability for any direct, indirect, incidental, or consequential damages arising from the use or reliance on the website's content.
                            </p>
                        </div>
                    </div>

                    {/* Copyright Notice */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaBalanceScale /> Copyright & Usage Rights
                        </h2>
                        <p className="mt-2 text-gray-700">
                            All site content is protected under <strong>Government of Pakistan copyright laws</strong>. No part of this site may be copied, distributed, or reproduced without express written permission from MavDocs.
                        </p>
                        <p className="mt-2 text-gray-700">
                            MavDocs actively monitors for copyright infringement and reserves the right to pursue legal action against any unauthorized use in <strong>federal court</strong>.
                        </p>
                    </div>

                    {/* External Links */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaGlobeAsia /> Third Party Links & References
                        </h2>
                        <p className="mt-2 text-gray-700">
                            References and external links are provided for user convenience. However, MavDocs holds <strong>no responsibility</strong> for the content, accuracy, or practices of third-party websites not owned or controlled by MavDocs.
                        </p>
                        <div className="mt-4 flex items-center text-blue-600 text-sm gap-2">
                            <FaExternalLinkAlt />
                            <span>Use third-party content at your own discretion.</span>
                        </div>
                    </div>

                    {/* Last Note */}
                    <div className="text-center border-t pt-6 mt-6">
                        <p className="text-gray-700 text-sm">
                            For legal concerns or clarifications regarding our Terms of Service, contact us at:{" "}
                            <a href="mailto:info@mavdocs.pk" className="text-blue-600 underline">info@mavdocs.pk</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default OurService;
