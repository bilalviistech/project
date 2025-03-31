import { WebLayout } from "@/layout/WebLayout";
import { Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      <Route
        exact
        path="/*"
        // element={isAuthenticated ? <DashboardLayout /> : <WebLayout />}
        element={<WebLayout />}
      />
    </Routes>
  );
};

export default Root;
