import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Root from "./config";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./views/website/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
        <ScrollToTop />
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
