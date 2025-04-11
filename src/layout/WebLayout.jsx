import { Routes, Route, Navigate } from "react-router-dom";
import {
  AgreementFormScreen,
  CheckoutScreen,
  HomeScreen,
  ProductDetailScreen,
  ProductScreen
} from "../views";
import Contact from "@/views/website/Contact";
import About from "@/views/website/About";
import OurService from "@/views/website/OurService";
import PrivacyPolicy from "@/views/website/PrivacyPolicy";

export const WebLayout = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<Navigate to={"/"} replace />} />
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/product" element={<ProductScreen />} />
      <Route exact path="/product-detail" element={<ProductDetailScreen />} />
      <Route exact path="/checkout" element={<CheckoutScreen />} />
      <Route exact path="/agreement/:id" element={<AgreementFormScreen />} />
      <Route exact path="/contact-us" element={<Contact />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/our-service" element={<OurService />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};
