import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowDown,
  FaPercentage,
  FaTruckMoving,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper's core CSS
import 'swiper/css/navigation'; // Navigation styles (optional)
import 'swiper/css/pagination'; // Pagination styles (optional)
import banner1 from "@/assets/images/banner1.jpg"
import banner2 from "@/assets/images/banner2.webp"
import productImg from "@/assets/images/productImg.webp"
import { Navigation, Autoplay } from 'swiper/modules'; // import Navigation module
import { products, partners, reviews, blogPosts } from "../../constant/data";

const Home = () => {
  const [currentText, setCurrentText] = useState("Search Your Agreement");
  const textArray = ["Search Your Agreement", "Search Your Affidavit", "Search Your Undertaking", "Search Your Promissory Note", "Customize Document"];

  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchText.trim())}`);
    }
  };

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
    <div className="min-h-screen text-white font-sans">
      <Header />
      {/* Hero Section */}
      {/* <section
                className="relative bg-cover bg-center shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${banner1})`, height: '50vh' }}
            >
            </section> */}
      <section
        className="relative bg-cover bg-center shadow-lg overflow-hidden"
      >
        <img src={banner2} alt="banner" className="w-full object-contain" loading="lazy"/>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> */}
      </section>

      {/* Search Bar */}
      <div className="custom-search-section px-6 md:px-20 mx-4 md:mx-36 py-10">
        <div className="bg-[#112e5a] flex flex-col md:flex-row items-center justify-center w-full p-4 rounded-lg shadow-lg">

          {/* Search Header */}
          <div className="search-header w-full md:w-2/5 text-center md:text-left mb-4 md:mb-0">
            <div className="search-title text-white text-2xl font-semibold">
              <span>{currentText}</span>
            </div>
          </div>

          {/* Search Form Container */}
          <div className="search-form-container w-full md:w-2/4">
            <form onSubmit={handleSearch} className="flex items-center justify-center md:justify-start">

              {/* Search Input */}

              <div className="w-full md:w-3/4">
                <input
                  type="search"
                  placeholder="Find Your Document..."
                  autoComplete="off"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
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

      {/* Cart Reviews */}
      <section className="flex justify-center items-center text-center py-8 max-[500px]:py-6 bg-[#112e5a] mx-4 my-3 rounded-lg shadow-md">
        <div className="bg-white text-black py-6 px-6 flex justify-center w-full max-[500px]:py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              {
                icon: <FaArrowDown />,
                text: "Low Prices",
              },
              {
                icon: <FaPercentage />,
                text: "Easy Process",
              },
              {
                icon: <FaTruckMoving />,
                text: "Free Delivery",
              },
            ].map(({ icon, text }, index) => (
              <div key={index} className="flex items-center justify-center gap-2 rounded-lg">
                <div className="bg-[#f5a623] rounded-full p-3 text-white max-[500px]:text-3xl max-[1025px]:text-5xl max-[1500px]:text-5xl max-[2000px]:text-5xl">
                  {icon}
                </div>
                <span className="text-lg font-medium text-black">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Button */}
      <section className="flex flex-col items-center justify-center py-5">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="md:text-2xl max-[426px]:text-2xl max-[426px]:px-2 font-bold text-gray-800">Legal documents with fast, reliable, and free delivery</h2>
        </div>
        {/* Button */}
        <div className="flex justify-center mb-4">
          <Link to={"/product"}>

            <button className="bg-[#f5a623] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#f5a177] focus:ring-4 focus:ring-blue-300 transition-transform transform hover:translate-y-[-10px] duration-300 ease-in-out">
              Order Document
            </button>
          </Link>
        </div>
      </section>

      <section className="py-7 px-6 bg-[#f7f7f7] text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          Best Seller
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]} // Register modules here
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={true} // Enable navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.slice(0, 10).map((category) =>
            category.subcategories.map((subcategory) =>
              subcategory.products.slice(0, 10).map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-5">
                    <div className="flex justify-center mb-4">
                      <img
                        src={product.url}
                        alt={product.title}
                        className="w-96 h-64 object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-[#003092] mb-2 h-14">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2">
                        {(product.details || product.detail)?.length > 80
                          ? `${(product.details || product.detail).slice(0, 80)}...`
                          : product.details || product.detail}
                      </p>
                      <p className="text-lg font-semibold text-[#f15722] mb-4">
                        RS: {product.price}/=
                      </p>
                      {/* <Link to="/product-detail"> */}
                      <Link to={`/product-detail/${category.id}/${subcategory.id}/${product.title}`}>
                        <button className="bg-[#f5a623] text-white py-2 px-4 rounded-lg hover:bg-[#e06b2a] transition-all">
                          Go To Detail Page
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )
          )}

        </Swiper>
      </section>


      {/* Best Seller Section */}

      <section className="text-center pb-10  mx-4 my-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">Our Partners</h2>
        <Swiper
          spaceBetween={10} // Space between slides
          slidesPerView={5} // Number of slides visible at a time
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
          loop={true} // Infinite loop effect
          autoplay={{
            delay: 2000, // Set autoplay delay
            disableOnInteraction: true, // Disable autoplay when interacting
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center space-y-2">
                <img src={partner.logo} alt={partner.name} className="h-32 w-auto" loading="lazy"/>
                <span className="text-black text-sm">{partner.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* <section className="pt-8 pb-10 px-6 bg-[#f0f4f8] text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          How we works
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
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

          <div className="flex-1 w-full max-w-lg">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <iframe
                width="100%"
                height="315"
                src="https://drive.google.com/file/d/1_W1bEG4zyxJJ72ulXGTbhdevm8l4qp7Y/view" // Replace with your video URL
                title="How It Works Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pt-8 px-6 bg-[#f7f7f7] text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]} // Register Navigation
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={true} // Enable navigation arrows
          breakpoints={{
            320: { slidesPerView: 1 },
            425: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >

          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white min-h-60 max-h-60 p-6 px-10 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-5">
                {/* <div className="flex justify-center mb-4">
                  <img
                    src={"https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#f5a623]"
                  />
                </div> */}
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

      <section className="pt-10 pb-5 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#003092] mb-8">
          Latest Blog Posts
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {/* Slides go here */}
          {blogPosts?.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 px-10 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-5">
                <div className="mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#003092] min-h-[90px] max-h-[90px]">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    {post.description}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <a
                      href={post.link}
                      className="text-blue-500 text-sm font-medium hover:underline"
                    >
                      Read More
                    </a>
                  </Link>
                  
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