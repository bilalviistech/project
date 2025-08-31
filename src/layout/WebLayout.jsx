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
import ReturnExchangePolicy from "@/views/website/ReturnExchangePolicy";
import DeliveryTracking from "@/views/website/DeliveryTracking";
import JazzCashForm from "@/views/website/JazzCashForm";
import Form from "@/views/website/Form";
import Index from "@/views/website/Agreement/ResidentalRentalAgreement/ResidentialRentalAgreement"
import TypeDocument from "@/views/website/TypeDocument";
import BlogDetail from "@/views/website/BlogDetail";
import AdminOrderPage from "@/views/website/AdminOrderPage";
import AdminQueryPage from "@/views/website/AdminQueryPage";

export const WebLayout = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<Navigate to={"/"} replace />} />
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/product" element={<ProductScreen />} />
      <Route exact path="/product-detail/:id/:subcatId/:productTitle" element={<ProductDetailScreen />} />
      <Route exact path="/checkout" element={<CheckoutScreen />} />
      <Route exact path="/x2409order128b7" element={<AdminOrderPage />} />
      <Route exact path="/x2409order128b8" element={<AdminQueryPage />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      {/* <Route exact path="/agreement/:id" element={<AgreementFormScreen />} /> */}
      <Route exact path="/agreement" element={<AgreementFormScreen />} />
      <Route exact path="/contact-us" element={<Contact />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/term-service" element={<OurService />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/return-exchange-policy" element={<ReturnExchangePolicy />} />
      <Route exact path="/delivery-tracking" element={<DeliveryTracking />} />
      <Route exact path="/JazzCashForm" element={<JazzCashForm />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path="/type-document" element={<TypeDocument />} />
    </Routes>
  );
};
