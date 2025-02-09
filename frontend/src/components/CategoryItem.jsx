import React from "react";
import "../styles/categoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="category_item">
      <Link to={`/products/${item.cat}`} >
        <img src={item.img} alt={item.name} className="category_item_image" />
        <div className="item_info">
          <h1>{item.title}</h1>
          <button> SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
