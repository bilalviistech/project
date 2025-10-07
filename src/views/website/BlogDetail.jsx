import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "../../constant/data";

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
