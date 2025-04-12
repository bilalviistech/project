import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "../../constant/data"

const ProductDetail = () => {
    const { id, subcatId, productTitle } = useParams();

    const decodedSubcatName = subcatId.replace(/-/g, " ");
    const decodedTitle = productTitle.replace(/-/g, " ");

    // Find matching product
    const category = products.find(cat => cat.categoryId === Number(id));
    const subcategory = category?.subcategories.find(sub => sub.id == decodedSubcatName)
    const product = subcategory?.products.find(p => p.title.toLowerCase() === decodedTitle.toLowerCase());
    return (
        <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
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
                <div className="md:col-span-2">
                    <h2 className="text-4xl font-bold text-[#003092] py-3">
                        {product?.title || "Product Not Found"}
                    </h2>
                    <p className="text-xl font-bold text-gray-500">Price</p>
                    <p className="text-xl font-bold text-gray-500 py-2">
                        Rs: <span className="text-2xl font-bold text-[#003092]">{product?.price}/=</span>
                    </p>
                    <p className="text-xl font-bold text-gray-500 py-3">Title</p>
                    <p className="text-base text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim beatae excepturi dolores id reprehenderit ratione ex, repellat, molestias minima ipsam. Saepe repellat ipsa molestias iusto ratione id deleniti suscipit.
                        Rem, tenetur odit? Saepe placeat impedit harum! Accusamus, natus voluptatum voluptate illo amet adipisci, in asperiores suscipit eligendi, optio repellat modi recusandae. Beatae ipsa nemo itaque sunt dolorum repellendus quas?
                        Rem assumenda maxime, reprehenderit ab illum obcaecati, blanditiis repellat, repudiandae veritatis quibusdam corrupti adipisci cupiditate? Beatae fugiat deleniti dolor tenetur soluta, nulla distinctio excepturi non debitis mollitia, exercitationem iusto ex?
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex flex-col justify-between space-y-6">
                    <div>
                        <p className="text-md font-medium text-gray-600 mb-2">Start Your Process</p>
                        <div className="space-y-4">
                            <Link to={"/checkout"}>
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 my-3 bg-[#FF7F3E] text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-all">
                                    <FaShoppingCart /> Blank Form
                                </button>
                            </Link>
                            <Link to={"/agreement/1"}>
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#003092] text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition-all">
                                    <FaShoppingCart /> Editable Form
                                </button>
                            </Link>
                            {product?.url && (
                                <img src={product.url} alt={product.title} className="rounded-lg shadow-md w-full max-w-lg md:w-full sm:w-full lg:w-full" />
                            )}
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