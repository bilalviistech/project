import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => (
    <div className="bg-blue-50 min-h-screen text-black">
        <Header />
        <section class="bg-blue-900 text-white py-20 px-5 md:px-20">
            <div class="max-w-6xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p class="text-lg md:text-xl text-blue-100">We'd love to hear from you. Whether you have a question, need support, or just want to say hello — we're here for you.</p>
            </div>
        </section>

        {/* <!-- Contact Info & Form --> */}
        <section class="py-16 px-5 md:px-20 bg-gray-50">
            <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* <!-- Contact Info --> */}
                <div class="space-y-6">
                    <h2 class="text-2xl font-semibold text-blue-900">Contact Information</h2>
                    <p class="text-gray-600">Feel free to reach out through any of the channels below. We're available during business hours (Mon–Fri, 9AM–6PM).</p>
                    <div class="space-y-3">
                        <div>
                            <p class="text-sm text-gray-500">Email</p>
                            <p class="font-medium text-blue-900">support@example.com</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Phone</p>
                            <p class="font-medium text-blue-900">+92 300 1234567</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Office Address</p>
                            <p class="font-medium text-blue-900">123 Main Street, Lahore, Pakistan</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Contact Form --> */}
                <div class="bg-white shadow-lg p-8 rounded-xl">
                    <form class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" placeholder="Your Full Name" class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" placeholder="you@example.com" class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" placeholder="Subject of your message" class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Message</label>
                            <textarea rows="5" placeholder="Write your message here..." class="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </section>

        {/* <!-- Map Section --> */}
        <section class="py-16 px-5 md:px-20">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-2xl font-semibold mb-6 text-blue-900">Our Location</h2>
                <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27214.92784607886!2d74.2974415!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d0d1b26a27%3A0x2c90b1c4fc40d660!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1643906198082!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default Contact;
