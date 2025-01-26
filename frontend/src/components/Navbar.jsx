import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";

const Navbar = () => {
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
          <div>REGISTER</div>
          <div>SIGN IN</div>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
