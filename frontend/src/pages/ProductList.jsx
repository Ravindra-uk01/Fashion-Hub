import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/productList.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

  const {cat} = useParams();
  const [sort, setSort] = useState("newest");
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      [e.target.name] : value
    }))
  }

  return (
    <>
      <Navbar />
      <Announcement />
      <div className="productList">
        <h1 className="capitalize" >{cat}</h1>
        <div className="productList__filter">
          <div className="productList__filterLeft">
            <h2>Filter Products:</h2>
            <select name="color"  onChange={handleFilters}>
                <option value="" disabled > Select Color </option>
                <option value="blue" >Blue</option>
                <option value="black" >Black</option>
                <option value="yellow" >Yellow</option>
                <option value="red">Red</option>
            </select>
            <select name="size"  onChange={handleFilters}>
                <option value="" disabled > Select Size </option>
                <option value="S" >S</option>
                <option value="M" >M</option>
                <option value="L" >L</option>
                <option value="XL" >XL</option>
                <option value="XLL" >XLL</option>
              </select>
          </div>
          <div className="productList__filterLeft mr-50">
            <h2>Sort Products:</h2>
            <select value={sort} onChange={(e) => setSort(e.target.value)} >
                <option value="newest" >Newest</option>
                <option value="asc" >Price (asc)</option>
                <option value="dsc" >Price (dsc)</option>
              </select>
          </div>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
