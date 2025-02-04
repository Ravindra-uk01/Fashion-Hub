import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import "../styles/cart.css";

const Cart = () => {
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
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist(0)</span>
          </div>
          <button className="cart_top_last_button">CHECKOUT NOW</button>
        </div>
        <div className="cart_bottom">
          {/* <div className="cart_product">
            <div className="cart_product_info">
              <div className="cart_product_image">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              </div>

              <div className="cart_product_details">
                <div className="cart_product_item">
                  <div className="cart_product_itemDiv">
                    <span>Product:</span> JESSE THUNDER SHOES{" "}
                  </div>
                  <div className="cart_product_itemDiv">
                    <span>ID:</span> 9813874521
                  </div>
                  <div className="cart_product_itemColor"> </div>
                  <div className="cart_product_itemDiv">
                    <span>Size:</span>37.5
                  </div>
                </div>

                <div className="cart_product_price">
                  <div className="cart_product_quantity">
                    +<div>2</div>-
                  </div>
                  <div className="cart_product_price">$30</div>
                </div>
              </div>
            </div>

            <hr />
        
          </div> */}

          <div className="cart_info">
            <div className="cart_product">
              <div className="product_details">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="product 1 image"
                />
                <div className="details">
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="details_color" ></div>
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="price_details">
                <div className="quantity">
                  <RemoveOutlinedIcon />
                  <div>1</div>
                  <AddOutlinedIcon />
                </div>
                <div className="price" >$20</div>
              </div>
            </div>
          </div>

          <div className="cart_summary">
            <h2>ORDER SUMMARY</h2>
            <div>
              <span>Subtotal</span>
              <span>$80</span>
            </div>
            <div>
              <span>Estimated Shipping</span>
              <span>$5.90</span>
            </div>
            <div>
              <span>Shipping Discount</span>
              <span>-$5.90</span>
            </div>
            <div className="summary_total"> 
              <span>Total</span>
              <span>$80</span>
            </div>
            <button className="cart_summary_button" >CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
