import { Routes, Route, Navigate } from "react-router-dom";
import {
  AgreementFormScreen,
  CheckoutScreen,
  HomeScreen,
  ProductDetailScreen,
  ProductScreen
} from "../views";

export const WebLayout = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<Navigate to={"/"} replace />} />
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/product" element={<ProductScreen />} />
      <Route exact path="/product-detail" element={<ProductDetailScreen />} />
      <Route exact path="/checkout" element={<CheckoutScreen />} />
      <Route exact path="/agreement/:id" element={<AgreementFormScreen />} />
    </Routes>
  );
};
