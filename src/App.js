import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CategoryPage from "./pages/CategoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./modules/Dashboard/DashboardLayout";
import CategoryManage from "./modules/Category/CategoryManage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/category" element={<CategoryPage></CategoryPage>}></Route>
        <Route path="/product" element={<ProductPage></ProductPage>}></Route>
        <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route
            path="/dashboard"
            element={<DashboardPage></DashboardPage>}
          ></Route>
          <Route
            path="/manage/category"
            element={<CategoryManage></CategoryManage>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
