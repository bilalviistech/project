import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaExclamationTriangle, FaUndoAlt, FaFileAlt } from 'react-icons/fa';

const ReturnExchangePolicy = () => {
    return (
        <div>
            <Header />
            <section className="bg-gradient-to-br px-4 py-12 md:px-10 lg:px-24 text-[#1f2937]">
                <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600 flex items-center gap-3">
                        <FaUndoAlt className="text-orange-500" /> Return & Exchange Policy
                    </h1>

                    <div className="mb-6 text-gray-700 space-y-4">
                        <p>You have <strong>12 hours</strong> from the time of delivery to request a return or exchange under the following conditions:</p>

                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                If there is a <strong>mistake in the document made by MavDocs</strong>, we will provide a <span className="text-green-600 font-medium">100% refund</span>. The rider will collect the returned document <strong>free of cost within 24 hours</strong>.
                            </li>
                            <li>
                                Any <strong>opened document (typed with a pen)</strong>, such as an agreement, affidavit, or any other filled document, can be returned or exchanged <strong>within 24 hours</strong>, with a <span className="text-red-600 font-medium">deduction of Rs. 50</span> from the total paid amount.
                            </li>
                            <li>
                                The document must be returned in the <strong>original MavDocs envelope</strong>, in visible and sound condition, with <strong>no signs of damage</strong>.
                            </li>
                        </ul>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex gap-3 items-start mt-4">
                            <FaExclamationTriangle className="text-yellow-600 mt-1" />
                            <p className="text-sm text-gray-800">
                                <strong>Note:</strong> Documents that contain errors due to the information provided by <strong>you</strong> will <span className="text-red-600">not</span> be eligible for return or exchange.
                            </p>
                        </div>
                    </div>

                    <hr className="my-6 border-t border-gray-300" />

                    <h2 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center gap-2">
                        <FaFileAlt /> How to Apply for a Return
                    </h2>

                    <div className="text-gray-700 space-y-4 mb-6">
                        <p>To request a return:</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-blue-500" />
                                <strong>Call us at:</strong> +92 300 188 2235
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-500" />
                                <strong>Email:</strong> <a href="mailto:service@mavdocs.pk" className="underline text-blue-600">service@mavdocs.pk</a>
                            </li>
                        </ul>

                        <p>Please include your <strong>order details</strong> and the <strong>reason for return</strong>. Once approved by our customer support team, you’ll receive a confirmation message with pickup guidelines and scheduled time.</p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md text-sm">
                            <p><strong>Note:</strong> If the return is not due to an error on our part, <strong>you will be responsible</strong> for the return shipping costs.</p>
                            <p className="mt-2">We aim to process all returns within <strong>24 hours</strong>. During busy periods, please allow up to <strong>48 hours</strong>.</p>
                        </div>
                    </div>

                    <hr className="my-6 border-t border-gray-300" />

                    <h2 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center gap-2">
                        <FaFileAlt /> Customized Documents - Return Policy
                    </h2>

                    <div className="text-gray-700 space-y-4">
                        <p><strong>Customized documents</strong> (i.e., any documents filled on special request) <span className="text-red-600">cannot be returned or exchanged</span>.</p>

                        <p>However, if you received an <strong>incorrectly drafted document due to our mistake</strong>, you may send pictorial evidence of the error. Our team will review the issue and aim to cooperate in the <strong>best possible manner</strong>.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ReturnExchangePolicy;
