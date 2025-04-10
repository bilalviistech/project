import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import {
    FaSearch,
    FaShoppingCart,
    FaStar,
    FaBlog,
    FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import noImage from "@/assets/images/noImage.jpg";
import {
    FaArrowDown,
    FaDoorOpen,
    FaPercentage,
    FaTruckMoving,
} from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper's core CSS
import 'swiper/css/navigation'; // Navigation styles (optional)
import 'swiper/css/pagination'; // Pagination styles (optional)

// Sample partner data
const partners = [
    { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "KFC", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Pepsi", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "McDonald's", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
    { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" }
];

const products = [
    {
        image: 'https://testdeveloplink.com/document/wp-content/uploads/2025/01/aaiz-bhai.jpg',
        name: 'Product 1',
        shortDescription: 'This is a short description of product 1.',
        price: '49.99',
    },
    {
        image: 'https://testdeveloplink.com/document/wp-content/uploads/2025/01/aaiz-bhai.jpg',
        name: 'Product 2',
        shortDescription: 'This is a short description of product 2.',
        price: '79.99',
    },
    {
        image: 'https://testdeveloplink.com/document/wp-content/uploads/2025/01/aaiz-bhai.jpg',
        name: 'Product 3',
        shortDescription: 'This is a short description of product 3.',
        price: '29.99',
    },
    {
        image: 'https://testdeveloplink.com/document/wp-content/uploads/2025/01/aaiz-bhai.jpg',
        name: 'Product 4',
        shortDescription: 'This is a short description of product 4.',
        price: '99.99',
    },
    {
        image: 'https://testdeveloplink.com/document/wp-content/uploads/2025/01/aaiz-bhai.jpg',
        name: 'Product 5',
        shortDescription: 'This is a short description of product 5.',
        price: '59.99',
    },
    {
        image: 'https://testdeveloplink.com/document/wp-content/uploads/2025/01/aaiz-bhai.jpg',
        name: 'Product 6',
        shortDescription: 'This is a short description of product 6.',
        price: '39.99',
    },
];


// Sample data for customer reviews
const reviews = [
    {
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual images
        rating: 5,
        description:
            "Great product! Highly recommend it to anyone looking for quality and reliability.",
    },
    {
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/2.jpg", // Replace with actual images
        rating: 4,
        description:
            "Very satisfied with the service. A few minor issues, but overall a positive experience.",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    {
        name: "Mark Wilson",
        image: "https://randomuser.me/api/portraits/men/2.jpg", // Replace with actual images
        rating: 5,
        description:
            "Excellent customer support. The product exceeded my expectations in every way!",
    },
    // Add more reviews as needed
];

const blogPosts = [
    // {
    //     title: "The Future of E-Commerce",
    //     image: "https://via.placeholder.com/300x200",
    //     description:
    //         "Explore the trends and technologies shaping the future of online shopping. Stay ahead with innovative strategies and insights.",
    //     link: "/blog/future-of-ecommerce",
    // },
    {
        title: "5 Tips for Better Online Marketing",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Learn the essential tips for improving your online marketing strategy. Increase engagement and drive more sales.",
        link: "/blog/online-marketing-tips",
    },
    {
        title: "How to Boost Website Conversions",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
        link: "/blog/website-conversion-tips",
    },
    {
        title: "How to Boost Website Conversions",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
        link: "/blog/website-conversion-tips",
    },
    {
        title: "How to Boost Website Conversions",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
        link: "/blog/website-conversion-tips",
    },
    {
        title: "How to Boost Website Conversions",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
        link: "/blog/website-conversion-tips",
    },
    {
        title: "How to Boost Website Conversions",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
        link: "/blog/website-conversion-tips",
    },
    {
        title: "How to Boost Website Conversions",
        image: "https://www.dummyimg.in/placeholder",
        description:
            "Discover proven strategies to increase your website's conversion rates and turn visitors into loyal customers.",
        link: "/blog/website-conversion-tips",
    },
    // Add more blog posts as needed
];

const Home = () => {
    const [currentText, setCurrentText] = useState("Search Your Agreement");
    const textArray = ["Search Your Agreement", "Search Your Affidavit", "Search Your Undertaking", "Search Your Promissory Note", "Customize Document"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const currentIndex = textArray.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % textArray.length;
                return textArray[nextIndex];
            });
        }, 3000); // Change text every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-blue-50 min-h-screen text-white font-sans">
            <Header />
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center shadow-lg overflow-hidden"
                style={{
                    backgroundImage:
                        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmqc2L6AhKpBi1IU0gO_XQ_oMThJFS16wzw&s)",
                    height: "50vh", // Make the banner take up the full viewport height
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </section>

            {/* Search Bar */}
            <div className="custom-search-section px-6 md:px-20 mx-4 md:mx-36 py-10">
                <div className="bg-[#00246B] flex flex-col md:flex-row items-center justify-center w-full p-4 rounded-lg shadow-lg">

                    {/* Search Header */}
                    <div className="search-header w-full md:w-2/5 text-center md:text-left mb-4 md:mb-0">
                        <div className="search-title text-white text-2xl font-semibold">
                            <span>{currentText}</span>
                        </div>
                    </div>

                    {/* Search Form Container */}
                    <div className="search-form-container w-full md:w-2/4">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-center md:justify-start">

                            {/* Search Input */}
                            <div className=" w-full md:w-3/4">
                                <input
                                    id=""
                                    type="search"
                                    placeholder="Find Your Document..."
                                    autoComplete="off"
                                    role="combobox"
                                    aria-autocomplete="list"
                                    className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="py-2 bg-[#FF7F3E] text-white px-6 text-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all rounded-r-md"
                            >
                                Search
                            </button>

                        </form>
                    </div>
                </div>
            </div>

            {/* Cart Reviews */}
            <section className="flex justify-center items-center text-center py-8 bg-[#00246B] mx-4 my-6 rounded-lg shadow-md">
                <div className="bg-white text-black py-12 px-6 flex justify-center w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
                        {[
                            {
                                icon: <FaArrowDown size={50} />,
                                text: "Low Prices",
                            },
                            {
                                icon: <FaPercentage size={50} />,
                                text: "Easy Process",
                            },
                            {
                                icon: <FaTruckMoving size={50} />,
                                text: "Free Delivery",
                            },
                        ].map(({ icon, text }, index) => (
                            <div key={index} className="flex items-center justify-center space-x-3 rounded-lg">
                                <div className="bg-orange-400 rounded-full p-3 text-white">
                                    {icon}
                                </div>
                                <span className="text-lg font-medium text-black">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Button */}
            <section className="flex flex-col items-center justify-center py-10">
                {/* Heading */}
                <div className="mb-4 text-center">
                    <h2 className="text-base font-semibold text-gray-800">Add Your Heading Text Here</h2>
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <Link to={"/product"}>

                        <button className="bg-[#FF7F3E] text-white px-6 py-3 rounded-3xl text-lg hover:bg-[#f5a177] focus:ring-4 focus:ring-blue-300 transition-transform transform hover:translate-y-[-10px] duration-300 ease-in-out">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-16 px-6 bg-[#f7f7f7] text-center">
                <h2 className="text-3xl font-semibold text-[#003092] mb-8">
                    Our Featured Products
                </h2>

                <Swiper
                    spaceBetween={30} // Space between slides
                    slidesPerView={1} // Number of slides visible at a time
                    loop={true} // Infinite loop effect
                    autoplay={{ delay: 3000 }} // Auto play for the slider
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // 2 slides on small screens
                        },
                        768: {
                            slidesPerView: 3, // 3 slides on medium screens
                        },
                        1024: {
                            slidesPerView: 4, // 4 slides on large screens
                        },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-96 h-64 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-[#003092] mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-2">
                                        {product.shortDescription}
                                    </p>
                                    <p className="text-lg font-semibold text-[#f15722] mb-4">
                                        ${product.price}
                                    </p>
                                    <Link to={"/product-detail"}>
                                        <button className="bg-[#FF7F3E] text-white py-2 px-4 rounded-full hover:bg-[#e06b2a] transition-all">
                                            Shop Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>


            {/* Best Seller Section */}

            <section className="text-center py-8 mx-4 my-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-black font-semibold mb-6">Our Partners</h2>
                <Swiper
                    spaceBetween={50} // Space between slides
                    slidesPerView={4} // Number of slides visible at a time
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    loop={true} // Infinite loop effect
                    autoplay={{
                        delay: 1000, // Set autoplay delay
                        disableOnInteraction: true, // Disable autoplay when interacting
                    }}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <img src={partner.logo} alt={partner.name} className="h-32 w-auto" />
                                <span className="text-black text-sm">{partner.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="py-16 px-6 bg-[#f0f4f8] text-center">
                <h2 className="text-3xl font-semibold text-[#00246B] mb-8">
                    How It Works
                </h2>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Text Explanation */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium text-[#003092] mb-4">
                            Easy & Simple Process
                        </h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Our process is designed to be quick and easy. Simply follow the steps, and you'll be all set in no time. We aim to provide the best experience for you!
                        </p>
                        <ul className="list-disc text-left space-y-2 text-gray-600">
                            <li>Step 1: Sign Up or Log In</li>
                            <li>Step 2: Choose Your Product</li>
                            <li>Step 3: Enjoy the Service</li>
                        </ul>
                    </div>

                    {/* Video */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                                title="How It Works Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-[#f7f7f7] text-center">
                <h2 className="text-3xl font-semibold text-[#003092] mb-8">
                    What Our Customers Say
                </h2>

                <Swiper
                    spaceBetween={30} // Space between slides
                    slidesPerView={1} // Number of slides visible at a time
                    loop={true} // Infinite loop effect
                    autoplay={{ delay: 3000 }} // Auto play for the slider
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // 2 slides on small screens
                        },
                        768: {
                            slidesPerView: 3, // 3 slides on medium screens
                        },
                        1024: {
                            slidesPerView: 4, // 4 slides on large screens
                        },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-20 h-20 rounded-full object-cover border-2 border-[#FF7F3E]"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-[#003092] mb-2">
                                        {review.name}
                                    </h3>
                                    <div className="flex justify-center mb-4">
                                        {Array.from({ length: review.rating }).map((_, idx) => (
                                            <svg
                                                key={idx}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                className="w-5 h-5 text-yellow-400"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 15l-5 3 1-5-4-4 5-1L10 3l2 5 5 1-4 4 1 5-5-3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-sm">{review.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="py-16 px-6 bg-[#f7f7f7] text-center">
                <h2 className="text-3xl font-semibold text-[#003092] mb-8">
                    Latest Blog Posts
                </h2>

                <Swiper
                    spaceBetween={30} // Space between slides
                    slidesPerView={1} // Number of slides visible at a time
                    loop={true} // Infinite loop effect
                    autoplay={{ delay: 3000 }} // Auto play for the slider
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // 2 slides on small screens
                        },
                        768: {
                            slidesPerView: 3, // 3 slides on medium screens
                        },
                        1024: {
                            slidesPerView: 4, // 4 slides on large screens
                        },
                    }}
                >
                    {blogPosts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                                <div className="mb-4">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-[#003092] mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4 text-sm">
                                        {post.description}
                                    </p>
                                    <a
                                        href={post.link}
                                        className="text-blue-500 text-sm font-medium hover:underline"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;