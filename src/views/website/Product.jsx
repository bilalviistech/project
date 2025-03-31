import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
    {
        name: "Category 1",
        products: [
            { id: 1, name: "Product 1", price: 800, details: "This is just for Layout Example" },
            { id: 2, name: "Product 2", price: 800, details: "Lorem ipsum dolor sit amet." },
            { id: 3, name: "Product 3", price: 800, details: "Lorem ipsum dolor sit amet." }
        ]
    },
    {
        name: "Category 2",
        products: [
            { id: 4, name: "Product 1", price: 600, details: "This is just for Layout Example" },
            { id: 5, name: "Product 2", price: 800, details: "Lorem ipsum dolor sit amet." },
            { id: 6, name: "Product 3", price: 800, details: "Lorem ipsum dolor sit amet." }
        ]
    }
];

const Product = () => {
    return (
        <div className="bg-[#003092] min-h-screen text-white font-sans">
            <Header/>
            <h1 className="text-3xl font-bold text-center">Products</h1>
            <p className="text-center text-lg mt-2">Order any product of your choice with just a few clicks</p>

            {/* Category Tabs */}
            <div className="flex justify-center gap-2 mt-4">
                {categories.map((category, index) => (
                    <button key={index} className="px-4 py-2 bg-[#FF7F3E] text-white rounded-lg shadow-md hover:bg-orange-600 transition-all">
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Product List */}
            <div className="mt-6">
                {categories.map((category, index) => (
                    <div key={index} className="mt-6">
                        <h2 className="text-2xl font-semibold bg-[#C6E7FF] text-black py-2 px-4 rounded-md shadow-md">{category.name}</h2>
                        <div className="space-y-4 mt-4">
                            {category.products.map(product => (
                                <div key={product.id} className="p-4 bg-[#C6E7FF] text-black rounded-lg shadow-md">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-xl font-bold">{product.name}</h3>
                                            <p className="text-red-600">{product.details}</p>
                                            <p className="mt-1 font-semibold">Rs. {product.price}</p>
                                        </div>
                                        <Link to={'/agreement/1'}>
                                        <button className="px-4 py-2 bg-[#FF7F3E] text-white rounded-lg hover:bg-orange-600 transition-all flex items-center gap-2">
                                            <FaShoppingCart /> Order Now
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
                 <Footer/>
        </div>
    );
}

export default Product;