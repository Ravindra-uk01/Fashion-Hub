import "../styles/product.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Product = ({product}) => {
  return (
    <div className="product">
        <div className="product_behind_circle" ></div>
        <img
          src={product.img}
          alt="product image"
          className="product__info__img"
        />
        <div className="product__info__details">
            <div>
                <ShoppingCartOutlinedIcon/>
            </div>
            <div>
                <SearchOutlinedIcon/>
            </div>
            <div>
                <FavoriteBorderOutlinedIcon/>
            </div>
        </div>
    </div>
  );
};

export default Product;
