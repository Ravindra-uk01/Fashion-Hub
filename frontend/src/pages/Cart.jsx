import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../reducers/cartReducer";
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from "react";
import newRequest from "../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const KEY = import.meta.env.VITE_STRIPE_KEY;
  
  const handleProductQuantity = (index, dir) => {
    dispatch(updateProduct({index, dir}))
  }

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(()=>{
    const makePayment = async() => {
      try {
        const response = await newRequest.post("/checkout/payment", {
          tokenId: stripeToken._id,
          amount: 500
        } );
        // const {status , message} = response.data;
        navigate("/success", { state: { stripeData: response.data, products: cart } });

      } catch (error) {
        console.log('error ', error);
      }
    }

    stripeToken &&  makePayment();
  },[stripeToken, cart.total, navigate ])

  console.log('key is ',KEY);

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
            <span>Shopping Bag({cart.quantity})</span>
            <span>Your Wishlist(0)</span>
          </div>
          <button className="cart_top_last_button">CHECKOUT NOW</button>
        </div>
        <div className="cart_bottom">
          <div className="cart_info">
            {cart.products &&
              cart.products.length > 0 &&
              cart.products.map((product, idx) => {
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
            <h1>ORDER SUMMARY</h1>
            <div>
              <span>Subtotal</span>
              <span>₹ {cart.total}</span>
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
              <span>₹ {cart.total}</span>
            </div>
            <StripeCheckout 
              name="Fashion Hub"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is ₹${cart.total}`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
             >
              <button className="cart_summary_button">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
