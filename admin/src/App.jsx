import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
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
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  const loggedIn = false;
  const isAdmin = false;
  // const isValid = loggedIn && isAdmin;
  const isValid = true;

  const PrivateRoute = ({ children }) => {
    return isValid ? children : <Navigate replace to="/login" />;
  };

  const DashboardLayout = () => (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={loggedIn ? <Navigate replace to="/" /> : <Register />}
          />
          <Route exact path="/forgot_password" element={<ForgotPassword />} />
          <Route
            exact
            path="/reset_password/:token"
            element={<ResetPassword />}
          />

          {/* Private Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="new_user" element={<NewUser />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="new_product" element={<NewProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
