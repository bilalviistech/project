import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "../../constant/data"

const ProductDetail = () => {
    const { id, subcatId, productTitle } = useParams();
    
    const priceOptions = [100, 150, 200];
    
    const decodedSubcatName = subcatId.replace(/-/g, " ");
    const decodedTitle = productTitle.replace(/-/g, " ");
    
    // Find matching product
    const category = products.find(cat => cat.categoryId === Number(id));
    console.log("this is category", category)
    const subcategory = category?.subcategories.find(sub => sub.id == decodedSubcatName)
    console.log("this is category", subcategory)
    const product = subcategory?.products.find(p => p.title.toLowerCase() === decodedTitle.toLowerCase());
    console.log("this is product", product)
    const [selectedPrice, setSelectedPrice] = useState({
        price: product.price,
        previous: 0
    });

    const priceHandler = (value) => {
        setSelectedPrice((prev) => {
            const newTotal = prev.price - prev.previous + value;

            return {
                price: newTotal,
                previous: value
            };
        });
    };

    return (
        <div className="min-h-screen text-gray-800 font-sans">
            {/* Navbar */}
            <Header />

            {/* Banner */}
            <section className="bg-[#C6E7FF] rounded-xl mx-4 md:mx-10 mt-6 p-8 shadow-lg">
                <div className="w-full h-56 bg-gray-300 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#003092]">Product Banner</span>
                </div>
            </section>

            {/* Product Section */}
            <section className="px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#003092] mb-4">
                        {product?.title || "Product Not Found"}
                    </h2>

                    <div className="mb-4">
                        <label className="text-lg font-semibold text-gray-600 block mb-1">Choose Agreement Price</label>
                        <select
                            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003092]"
                            value={selectedPrice}
                            onChange={(e) => priceHandler(Number(e.target.value))}
                        >
                            <option>Select your agreement</option>
                            {priceOptions.map((price, index) => (
                                <option key={index} value={price}>
                                    Rs: {price}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <p className="text-xl font-semibold text-gray-700">Selected Price</p>
                        <p className="text-2xl font-bold text-[#003092]">Total Price: Rs {selectedPrice.price}/=</p>
                    </div>

                    <div className="mb-6">
                        <p className="text-xl font-semibold text-gray-700 mb-2">Product Description</p>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim beatae excepturi dolores id reprehenderit ratione ex, repellat, molestias minima ipsam. Saepe repellat ipsa molestias iusto ratione id deleniti suscipit.
                            Rem, tenetur odit? Saepe placeat impedit harum! Accusamus, natus voluptatum voluptate illo amet adipisci, in asperiores suscipit eligendi, optio repellat modi recusandae. Beatae ipsa nemo itaque sunt dolorum repellendus quas?
                            Rem assumenda maxime, reprehenderit ab illum obcaecati, blanditiis repellat, repudiandae veritatis quibusdam corrupti adipisci cupiditate? Beatae fugiat deleniti dolor tenetur soluta, nulla distinctio excepturi non debitis mollitia, exercitationem iusto ex?
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex flex-col justify-between space-y-6">
                    <div>
                        <p className="text-md font-medium text-gray-600 mb-2">Start Your Process</p>
                        <div className="space-y-4">
                            <Link to={"/checkout"}>
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 my-3 bg-[#f5a623] text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-all">
                                    <FaShoppingCart /> Blank Form
                                </button>
                            </Link>
                            <Link to={""}>
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition-all">
                                    <FaShoppingCart /> Coming Soon
                                </button>
                            </Link>
                            {/* {product?.url && (
                                <img src={product.url} alt={product.title} className="rounded-lg shadow-md w-full max-w-lg md:w-full sm:w-full lg:w-full" />
                            )} */}
                        </div>
                    </div>
                    <div className="text-xs text-gray-400 text-center">
                        *You can choose between a blank or editable version based on your preference.
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetail;