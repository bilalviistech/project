import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mycategories, products } from "./../../constant/data";
import { toast } from "react-toastify";
import axios from 'axios';
import ThankYou from "@/components/ThankYou";

const Product = () => {
    const [modal, showModal] = useState(false)
    const [searchText, setSearchText] = useState("");  // Use this to control the search bar
    const [currentText, setCurrentText] = useState("Search Your Agreement");
    const textArray = ["Search Your Agreement", "Search Your Affidavit", "Search Your Undertaking", "Search Your Promissory Note", "Customize Document"];
    const [catState, setCatState] = useState("Agreement");
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        docDetail: '',
    });
    const [loading, setLoading] = useState(false);

    // Get search term from URL
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("search")?.toLowerCase() || "";
    const [temp, setTemp] = useState(searchTerm)

    useEffect(() => {
        // if (searchTerm) {
        //     setCatState(searchTerm)
        //     setSearchText(searchTerm);  // Set search text from URL
        // }
        if (temp) {
            setCatState(temp)
            setTemp("")
            // setSearchText(searchTerm);  // Set search text from URL
        }
    }, [temp]);

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

    const resetHandler = () => {
        setSearchText("");                // Clear the search input
        setCatState("Agreement");         // Optional: Reset category
        navigate("/product");             // Remove search param from URL
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!formData.name) {
            setLoading(false);
            toast.error('Please provide a name.');
            return;
        }
        if (!formData.contact) {
            setLoading(false);
            toast.error('Please Please provide a contact.');
            return;
        }
        if (!formData.docDetail) {
            setLoading(false);
            toast.error('Please Please provide a docDetail.');
            return;
        }

        let data = JSON.stringify({
            "name": formData.name,
            "contact": formData.contact,
            "docDetail": formData.docDetail,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://mavdocsbackend-production.up.railway.app/api/order/query',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                toast.success('Query placed successfully');
                setLoading(false);
                showModal(true)
                setTimeout(() => navigate('/'), 3000);
            })
            .catch((error) => {
                setLoading(false);
                toast.error('Something went wrong. Please try again.');
                console.log(error);
            });
    };

    return (
        <>
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
                                    className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7F3E] transition-all text-black"
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-2 bg-[#f5a623] text-white px-6 text-lg hover:bg-[#e66f2f] focus:ring-4 focus:ring-blue-300 transition-all rounded-r-md"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Category Buttons */}
            <div className="px-4 sm:px-8 py-4 bg-gray-100 rounded-md shadow-inner">
                {/* Category Buttons */}
                <div className="overflow-x-auto">
                    <div className="flex w-max sm:w-auto gap-3 sm:justify-center max-[500px]:pb-3">
                        {mycategories.map((category, index) => (
                            <button
                                key={index}
                                className="whitespace-nowrap px-5 py-2 bg-[#f5a623] text-white rounded-full shadow-md hover:bg-orange-600 transition-all text-sm sm:text-base font-semibold"
                                onClick={() => catChangeHandler(category)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Clear Filter Button on Next Line */}
                {
                    searchText && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={resetHandler}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all text-sm sm:text-base font-medium shadow-md"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear Filter
                            </button>
                        </div>
                    )
                }

            </div>


            {/* Product Lists with Filters */}
            <div className="my-10 px-6">
                {renderFilteredProducts(catState)}
                {/* Optional: Show message if no results */}
                {renderFilteredProducts(catState).length === 0 && (
                    <div className="text-center mt-8">
                        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-blue-100">
                            <h2 className="text-xl font-semibold text-[#003092] mb-4">
                                Need any stamp paper understanding, promissory note or other documents? Send us your detail
                            </h2>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5a623] border-gray-300 text-black"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-700">Contact</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5a623] border-gray-300 text-black"
                                        placeholder="Your contact info"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-700">Document Details</label>
                                    <textarea
                                        rows="3"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5a623] border-gray-300 text-black"
                                        placeholder="What are you looking for?"
                                        name="docDetail"
                                        value={formData.docDetail}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#f5a623] hover:bg-[#e66f2f] text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                                    disabled={loading}
                                >
                                    {loading ? `Submiting Request` : `Submit Request`}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
            {
                modal && (
                    <ThankYou heading={"Thank you for submitting the form!"} descp={"Our Customer Care team will get in touch with you within the next 15 minutes."} />
                )
            }
        </>
    );
};

export default Product;
