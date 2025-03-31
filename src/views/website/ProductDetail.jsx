import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    return (
        <div className="bg-[#003092] min-h-screen text-white font-sans">
            {/* Navbar */}
            <Header/>

            {/* Product Banner */}
            <section className="text-center py-8 bg-[#C6E7FF] text-black rounded-lg mx-4 my-6 shadow-md">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
                    <span className="text-xl font-bold">Banner</span>
                </div>
            </section>

            {/* Product Details */}
            <section className="p-6 flex flex-col md:flex-row gap-6">
                {/* Product Description */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">Product 1</h2>
                    <p className="mt-2 text-lg">Some Detail about product...</p>
                    <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat quam ac nunc vestibulum.</p>
                </div>

                {/* Product Buttons */}
                <div className="flex flex-col gap-4">
                    <Link to={"/checkout"}>
                    <button className="w-full px-6 py-3 bg-[#FF7F3E] text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Blank Form
                    </button>
                    </Link >
                    <Link to={"/agreement/1"}>
                    <button className="w-full px-6 py-3 bg-[#FF7F3E] text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        Editable Form
                    </button>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProductDetail;