import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge, Button } from "@mui/material";
import { useSelector } from "react-redux";
import SignoutModal from "./modals/SignOutModal";
import { useState } from "react";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const { loggedIn } = useSelector((state) => state.user);
  const [openSignoutForm, setOpenSignoutForm] = useState(false);

  console.log("loggedIn is ", loggedIn);

  return (
    <>
      <SignoutModal
        visible={openSignoutForm}
        onClose={() => setOpenSignoutForm(false)}
      />
      <nav className="navbar">
        <div className="navbar_container">
          <div className="navbar_left">
            <span className="nav_lang">EN</span>
            <div className="search_container">
              <input type="text" />
              <SearchOutlinedIcon className="search_bar" />
            </div>
          </div>
          <div className="navbar_center">
            <h1>FASHION HUB</h1>
          </div>
          <div className="navbar_right">
            {!loggedIn ? (
              <>
                <Link to="/register" className="navbar_right_details">
                  <div>REGISTER</div>
                </Link>
                <Link to="/login" className="navbar_right_details">
                  <div>SIGN IN</div>
                </Link>
              </>
            ) : (
              // <Link to="/logout" className="navbar_right_details">
              //   <div>SIGN OUT</div>
              // </Link>

              <Button
                variant="outlined"
                onClick={() => setOpenSignoutForm(true)}
              >
                SIGN OUT
              </Button>
            )}
            <Link to="/cart">
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
