import "../styles/product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product_behind_circle"></div>
      <img
        src={product.image}
        alt="product image"
        className="product__info__img"
      />
      <div className="product__info__details">
        <div className="product__info__detailsIcon" >
          <ShoppingCartOutlinedIcon />
        </div>
        <Link to={`/product/${product._id}`}>
          <div className="product__info__detailsIcon">
            <SearchOutlinedIcon />
          </div>
        </Link>
        <div className="product__info__detailsIcon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
