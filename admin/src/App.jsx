import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import NewUser from "./pages/newUser/NewUser";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/auth/Login";

function App() {

  const loggedIn = false;

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/new_user" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/new_product" element={<NewProduct />} />
          </Routes>
        </div>

        <Routes>
          {/* <Route path="/register" element={loggedIn ? <Navigate replace to="/" /> :<Register />} /> */}
          <Route path="/login" element={loggedIn ? <Navigate replace to="/" /> :<Login/>} />
          {/* <Route exact path="/forgot_password" element={<ForgotPassword/>} />
          <Route exact path="/reset_password/:token" element={<ResetPassword/>} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
