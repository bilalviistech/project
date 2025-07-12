import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogDetail = () => {
    const { slug } = useParams();
    const blogInfo = blogPosts.find((e) => e.id == slug);

    if (!blogInfo) {
        return <p>Blog post not found.</p>;
    }

    const htmlContent = blogInfo.link.replace(/className=/g, "class=");

    return (
        <>
        <Header />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <Footer />
        </>
    );
};

export default BlogDetail;
