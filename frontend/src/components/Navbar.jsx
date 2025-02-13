import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {quantity} =  useSelector((state) => state.cart);

  return (
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
          <Link to="/register" className="navbar_right_details" ><div >REGISTER</div></Link>
          <Link to="/login" className="navbar_right_details" ><div>SIGN IN</div></Link>
          <Link to="/cart" >
          <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
