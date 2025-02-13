import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../reducers/cartReducer";

const Cart = () => {
  const { products, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleProductQuantity = (index, dir) => {
    dispatch(updateProduct({index, dir}))
  }

  console.log("products is ", products);
  console.log("quantity is ", quantity);
  console.log("total is ", total);


  return (
    <>
      <Navbar />
      <Announcement />
      <div className="cart_container">
        <div className="cart_title">
          <h1>Your Cart</h1>
          {/* <span>Keep shopping</span> */}
        </div>
        <div className="cart_top">
          <button className="cart_top_first_button">CONTINUE SHOPPING</button>
          <div className="cart_top_center">
            <span>Shopping Bag({quantity})</span>
            <span>Your Wishlist(0)</span>
          </div>
          <button className="cart_top_last_button">CHECKOUT NOW</button>
        </div>
        <div className="cart_bottom">
          <div className="cart_info">
            {products &&
              products.length > 0 &&
              products.map((product, idx) => {
                return (
                  <div className="cart_product" key={`${product._id}-${idx}`}>
                    <div className="product_details">
                      <img
                        src={product.image}
                        alt="product image"
                      />
                      <div className="details">
                        <span>
                          <b>Product:</b> {product.name}
                        </span>
                        <span>
                          <b>ID:</b> {product._id}
                        </span>
                        <div className="details_color"></div>
                        <span>
                          <b>Size:</b> {product.size}
                        </span>
                      </div>
                    </div>
                    <div className="price_details">
                      <div className="quantity">
                        <RemoveOutlinedIcon onClick={()=>handleProductQuantity(idx, "dec")} />
                        <div>{product.quantity}</div>
                        <AddOutlinedIcon onClick={()=>handleProductQuantity(idx, "inc")} />
                      </div>
                      <div className="price"> ₹ {product.quantity * product.price}</div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="cart_summary">
            <h2>ORDER SUMMARY</h2>
            <div>
              <span>Subtotal</span>
              <span>₹ {total}</span>
            </div>
            <div>
              <span>Estimated Shipping</span>
              <span>₹ 50.90</span>
            </div>
            <div>
              <span>Shipping Discount</span>
              <span>₹ -50.90</span>
            </div>
            <div className="summary_total">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>
            <button className="cart_summary_button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
