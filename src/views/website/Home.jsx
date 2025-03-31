import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaSearch, FaShoppingCart, FaStar, FaBlog, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import noImage from "@/assets/images/noImage.jpg"

const Home = () => {
    return (
        <div className="bg-[#003092] min-h-screen text-white font-sans">
            <Header/>
            {/* Hero Section */}
            <section className="text-center py-16 bg-[#C6E7FF] text-black rounded-lg mx-4 my-6 shadow-md">
                <h1 className="text-4xl font-bold">Discover Amazing Products</h1>
                <p className="mt-2 text-lg">Explore the best quality items at unbeatable prices</p>
                <Link  to={"/product"}>
                <button className="mt-4 px-6 py-3 bg-[#FF7F3E] text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all">Shop Now</button>
                </Link>
            </section>

            {/* Search Bar */}
            <div className="flex justify-center items-center my-6">
                <div className="relative w-2/3 md:w-1/3">
                    <input type="text" placeholder="Search for products..." className="w-full p-3 rounded-lg text-black border-none" />
                    <FaSearch className="absolute top-3 right-4 text-gray-500" />
                </div>
            </div>

            {/* Best Seller Section */}
            <section className="text-center py-8">
                <h2 className="text-3xl font-semibold">Best Sellers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                    {["Product A", "Product B", "Product C", "Product D"].map((product, index) => (
                        <div key={index} className="p-4 bg-[#C6E7FF] text-black rounded-lg shadow-md text-center">
                            <img src={noImage} className="text-center w-full mb-3" alt="" srcset="" />
                            <FaShoppingCart className="text-4xl mx-auto text-[#003092]" />
                            <h3 className="mt-2 font-semibold">{product}</h3>
                            <Link to={"/product-detail"}>
                            <button className="mt-2 px-4 py-2 bg-[#FF7F3E] text-white rounded-lg hover:bg-orange-600 transition-all">Buy Now</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="text-center py-8 bg-[#00246B] mx-4 my-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-[#C6E7FF]">Customer Reviews</h2>
                <div className="mt-4 flex flex-col md:flex-row justify-center gap-6 p-4">
                    {["Amazing product!", "Great quality!", "Fast shipping!"].map((review, index) => (
                        <div key={index} className="p-4 bg-white text-black rounded-lg shadow-md">
                            <FaStar className="text-yellow-400 mx-auto text-2xl" />
                            <p className="mt-2">{review}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blog Section */}
            <section className="text-center py-8">
                <h2 className="text-3xl font-semibold">Latest Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    {["Blog 1", "Blog 2", "Blog 3"].map((blog, index) => (
                        <div key={index} className="p-4 bg-[#C6E7FF] text-black rounded-lg shadow-md text-center">
                            <FaBlog className="text-4xl mx-auto text-[#003092]" />
                            <h3 className="mt-2 font-semibold">{blog}</h3>
                            <button className="mt-2 px-4 py-2 bg-[#FF7F3E] text-white rounded-lg hover:bg-orange-600 transition-all">Read More</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <Footer/>

        </div>
    );
};

export default Home;
