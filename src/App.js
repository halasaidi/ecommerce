// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithAuth from "./Pages/WithAuth";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./component/Footer";
import men_banner from './component/Assets/banner_mens.png';
import women_banner from './component/Assets/banner_women.png';
import kid_banner from './component/Assets/banner_kids.png';
import ShopContextProvider from "./Context/ShopContext";

function App() {
  const ShopWithAuth = WithAuth(Shop);
  const ShopCategoryWithAuth = WithAuth(ShopCategory);
  const ProductWithAuth = WithAuth(Product);
  const CartWithAuth = WithAuth(Cart);
  const LoginSignupWithAuth = WithAuth(LoginSignup);

  return (
    <div className="App">
      <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<ShopWithAuth />} />
          <Route path="/mens" element={<ShopCategoryWithAuth banner={men_banner} category='men' />} />
          <Route path="/womens" element={<ShopCategoryWithAuth banner={women_banner} category='women' />} />
          <Route path="/kids" element={<ShopCategoryWithAuth banner={kid_banner} category='kid' />} />
          <Route path="/product" element={<ProductWithAuth />} />
          <Route path="/product/:productId" element={<ProductWithAuth />} />
          <Route path="/cart" element={<CartWithAuth />} />
          <Route path="/login" element={<LoginSignupWithAuth />} />
        </Routes>
        </ShopContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
