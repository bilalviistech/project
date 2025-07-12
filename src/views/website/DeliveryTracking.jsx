import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaTruck, FaRegClock, FaPhoneAlt, FaTimesCircle, FaMapMarkedAlt, FaCheckCircle, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

const DeliveryTracking = () => {
    return (
        <div>
            <Header />
            <section className="bg-gradient-to-br px-4 py-12 md:px-10 lg:px-24 text-[#1f2937]">
                <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600 flex items-center gap-3">
                        <FaTruck className="text-orange-500" /> Delivery & Tracking
                    </h1>

                    {/* Estimated Delivery Time */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaRegClock /> Estimated Delivery Time
                        </h2>
                        <p className="text-gray-700 mt-2">
                            The estimated average delivery time across <strong>Karachi</strong> is <strong>24 hours (1 working day)</strong>. For far-off areas, delivery may take up to <strong>48 hours</strong>.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Customers are kindly requested to remain available on their provided <strong>contact number</strong> and <strong>delivery address</strong> for smooth coordination.
                        </p>
                        <p className="mt-2 text-green-700 font-medium">
                            📢 You will receive a notification at least <strong>3 hours before delivery</strong> from our team.
                        </p>
                    </div>

                    {/* Cancellation Policy */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaTimesCircle /> Cancellation Policy
                        </h2>
                        <p className="text-gray-700 mt-2">
                            To cancel a <strong>prepaid or postpaid</strong> order, please contact us within <strong>30 minutes</strong> of placing the order.
                        </p>
                        <p className="mt-2 text-red-600 font-medium">
                            ⚠️ After the first 30 minutes of placing your document order, it <strong>cannot be canceled or refunded</strong>.
                        </p>
                    </div>

                    {/* Delivery Charges */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaMapMarkedAlt /> Delivery Charges
                        </h2>
                        <p className="text-gray-700 mt-2">
                            MavDocs currently offers <strong>free delivery</strong> on all orders. However, the company reserves the right to revise delivery charges in the future.
                        </p>
                    </div>

                    {/* Track Your Order */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2">
                            <FaCheckCircle /> Track Your Order
                        </h2>
                        <p className="text-gray-700 mt-2">
                            We currently do not offer real-time order tracking. However, once your order is dispatched, you will receive a confirmation via <strong>Email</strong> and/or <strong>SMS</strong>.
                        </p>
                        <p className="text-gray-700 mt-2">
                            If your order is not delivered within the announced time, please contact our helpline or email us at:{" "}
                            <a href="mailto:service@mavdocs.pk" className="text-blue-600 underline">📩 service@mavdocs.pk</a>
                        </p>

                        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex items-start gap-3">
                            <FaExclamationTriangle className="text-yellow-600 mt-1" />
                            <p className="text-sm text-gray-800">
                                <strong>Note:</strong> MavDocs is not responsible for delays caused by unexpected social or environmental conditions (e.g., traffic, strikes, weather).
                            </p>
                        </div>
                    </div>

                    {/* Need Help */}
                    <div className="text-center border-t pt-6">
                        <p className="text-gray-700 text-sm flex justify-center items-center gap-2">
                            <FaInfoCircle /> For any queries or support, reach out via our helpline or visit <a href="https://www.mavdocs.pk" className="text-blue-600 underline ml-1">www.mavdocs.pk</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default DeliveryTracking;
