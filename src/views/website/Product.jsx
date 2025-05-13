import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mycategories, products } from "./../../constant/data";

const Product = () => {
    const [searchText, setSearchText] = useState("");  // Use this to control the search bar
    const [currentText, setCurrentText] = useState("Search Your Agreement");
    const textArray = ["Search Your Agreement", "Search Your Affidavit", "Search Your Undertaking", "Search Your Promissory Note", "Customize Document"];
    const [catState, setCatState] = useState("Agreement");

    // Get search term from URL
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("search")?.toLowerCase() || "";

    useEffect(() => {
        if (searchTerm) {
            setSearchText(searchTerm);  // Set search text from URL
        }
    }, [searchTerm]);

    const catChangeHandler = (value) => {
        setCatState(value.name);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = textArray.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % textArray.length;
                return textArray[nextIndex];
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim()) {
            navigate(`/product?search=${encodeURIComponent(searchText.trim())}`);
        }
    };

    const renderFilteredProducts = (categoryName) => {
        const matchedCategories = products.filter((cat) => cat.categoryName === categoryName);

        return matchedCategories.map((category, index) => (
            <div key={index} className="mt-1">
                <h2 className="text-3xl font-bold text-[#003092] mb-6">{category.categoryName}</h2>

                {category.subcategories.map((subcat, subIndex) => {
                    // Filter products by search term
                    const filteredProducts = subcat.products.filter((product) =>
                        product.title.toLowerCase().includes(searchTerm)
                    );

                    if (filteredProducts.length === 0) return null;

                    return (
                        <div key={subIndex} className="mb-10">
                            <h3 className="text-2xl font-bold text-[#003092] mb-4">{subcat.name}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
                                {filteredProducts.map((product, prodIndex) => (
                                    <div
                                        key={prodIndex}
                                        className="bg-white text-black rounded-lg shadow border border-gray-200 p-6 relative flex flex-col justify-between h-full"
                                    >
                                        {/* Price and Image */}
                                        <div className="absolute top-7 right-4 text-right">
                                            <p className="text-sm text-gray-500 font-medium">Initial Price</p>
                                            <p className="text-lg font-semibold text-[#003092]">Rs {product.price}</p>
                                            <img src={product.url} alt="" className="w-40 mt-7 rounded-lg object-contain max-[500px]:hidden" />
                                        </div>

                                        {/* Product Content */}
                                        <div className="max-[374px]:w-40 max-[400px]:w-52 max-[500px]:w-64">
                                            <h3 className="text-xl font-bold text-[#003092] mb-2">{product.title}</h3>
                                            <p className="text-sm text-gray-600 mb-4">{product.details || "Professional legal draft prepared by our experts."}</p>

                                            <p className="font-semibold text-sm mb-2">What's The Process:</p>
                                            <ul className="list-none space-y-1 text-sm text-gray-700">
                                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span>Select Status</li>
                                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span>Enter Nominee Details</li>
                                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span>Enter Delivery Address</li>
                                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span>Enjoy Quick Delivery</li>
                                            </ul>
                                        </div>

                                        {/* Order Button */}
                                        <div className="mt-6 text-right">
                                            <Link to={`/product-detail/${category.id}/${subcat.id}/${product.title}`}>
                                                <button className="px-6 py-2 bg-[#f5a623] text-white rounded hover:bg-orange-600 transition-all text-sm font-semibold flex items-center gap-2">
                                                    <FaShoppingCart /> Order Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        ));
    };

    return (
        <div className="min-h-screen text-white font-sans">
            <Header />

            <div className="text-center py-8">
                <h1 className="text-4xl font-bold text-[#f5a623]">Our Documents</h1>
                <p className="text-lg mt-2 text-black">Select, complete the details, and order your legal document draft. MavDocs ensures reliable, free delivery of your documents to your doorstep within hours</p>
            </div>

            {/* Rotating Search Header */}
            <div className="custom-search-section px-6 md:px-20 mx-4 md:mx-36">
                <div className="bg-[#112e5a] flex flex-col md:flex-row items-center justify-center w-full p-4 rounded-lg shadow-lg">
                    <div className="search-header w-full md:w-2/5 text-center md:text-left mb-4 md:mb-0">
                        <div className="search-title text-white text-2xl font-semibold">
                            <span>{currentText}</span>
                        </div>
                    </div>
                    <div className="search-form-container w-full md:w-2/4">
                        <form onSubmit={handleSearch} className="flex items-center justify-center md:justify-start">
                            <div className="w-full md:w-3/4">
                                <input
                                    type="search"
                                    placeholder="Find Your Document..."
                                    autoComplete="off"
                                    value={searchText}  // Bind this to searchText state
                                    onChange={(e) => setSearchText(e.target.value)} // Update searchText state
                                    className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black"
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-2 bg-[#f5a623] text-white px-6 text-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all rounded-r-md"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Category Buttons */}
            <div className="overflow-x-auto">
                <div className="flex sm:justify-center gap-4 sm:gap-6 mt-3 mx-3 px-2 w-max sm:w-auto">
                    {mycategories.map((category, index) => (
                        <button
                            key={index}
                            className="whitespace-nowrap px-5 py-2.5 bg-[#f5a623] text-white rounded-full shadow-md hover:bg-orange-600 transition-all text-base sm:text-lg font-semibold"
                            onClick={() => catChangeHandler(category)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Lists with Filters */}
            <div className="my-10 px-6">
                {renderFilteredProducts(catState)}
                {/* Optional: Show message if no results */}
                {renderFilteredProducts(catState).length === 0 && (
                    <p className="text-center text-gray-600 mt-8 text-lg">No products found matching your search.</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Product;
