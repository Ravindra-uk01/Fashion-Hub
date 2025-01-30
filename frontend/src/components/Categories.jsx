import CategoryItem from "./CategoryItem.jsx";
import { categories } from "../data.js";
import "../styles/categories.css";

const Categories = () => {
  return (
    <div className="categories">
      {categories &&
        categories.length > 0 &&
        categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
    </div>
  );
};

export default Categories;
