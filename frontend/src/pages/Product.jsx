import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/product_page.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const Product = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="product_container">
        <div className="product_image">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product" />
        </div>
        <div className="product_info">
          <h1 className="product_name">Denim Jumpsuit</h1>
          <p className="product_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            justo nec justo aliquet ultricies. Nullam ut velit euismod, laoreet
            purus ac, bibendum eros. Nullam auctor, nunc nec lacin . Lorem Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo
            nec justo aliquet ultricies. Nullam ut velit euismod, laoreet purus
            ac, bibendum eros.
          </p>
          <p className="product_price">$ 20</p>
          <div className="product_filter">
            <label>Color</label>
            <select name="color" id="color">
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
            <label>Size</label>
            <select name="size" id="size">
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extra-large">XL</option>
            </select>
          </div>

          <div className="product_buttons">
            <div className="product_quantity">
              <button>
                <RemoveOutlinedIcon />
              </button>
              <div>1</div>
              <button>
                <AddOutlinedIcon />{" "}
              </button>
            </div>
            <button className="product_button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
