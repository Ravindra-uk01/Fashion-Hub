import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/productList.css";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="productList">
        <h1>Dresses</h1>
        <div className="productList__filter">
          <div className="productList__filterLeft">
            <h2>Filter Products:</h2>
            <select>
                <option disabled selected>
                  Select Color
                </option>
                <option>Blue</option>
                <option>Black</option>
                <option>Yellow</option>
                <option>Red</option>
            </select>
            <select>
                <option disabled selected>
                  Select Size
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XLL</option>
              </select>
          </div>
          <div className="productList__filterLeft mr-50">
            <h2>Sort Products:</h2>
            <select>
                <option selected>
                  Newest
                </option>
                <option>Price(asc)</option>
                <option>Price(dsc)</option>
              </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
