import { Publish } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { productDataChart } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import "./product.css";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../reducers/productReducer";
import newRequest from "../../utils/newRequest";

const Product = () => {
  const { product } = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [prodStats, setProdStats] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    image: "",
    is_deleted: "",
    categories: [],
    size: [],
    color: [],
    brand: "",
    stock: 0,
    inStock: false,
    status: "inactive",
  });

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCategoryChange = (e) => {
    const { options } = e.target;
    const selectedCategories = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCategories.push(options[i].value);
      }
    }
    setProductData((prev) => ({
      ...prev,
      categories: selectedCategories,
    }));
  };

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await newRequest.get(`/orders/income?pid=${productId}`);

        console.log("res data in pid ", res.data);
        const { income } = res.data;
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  // console.log('product Id is ', productId);
  // console.log('product is ', product);
  console.log("productData is ", productData);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/new_product">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productDataChart} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.image} alt="" className="productInfoImg" />
            <span className="productName">{product?.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price:</span>
              <span className="productInfoValue">₹ {product?.price}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">In stock:</span>
              <span className="productInfoValue">{product?.stock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="eg:- Apple AirPod"
              name="name"
              onChange={handleInputChange}
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder="eg:- Apple AirPod description"
              name="description"
              onChange={handleInputChange}
            />
            <label>Price</label>
            <input
              type="number"
              placeholder="eg:- 1000"
              name="price"
              onChange={handleInputChange}
            />

            <label>Discount Price</label>
            <input
              type="number"
              placeholder="eg:- 800"
              name="discountPrice"
              onChange={handleInputChange}
            />

            <label>Brand</label>
            <input
              type="text"
              placeholder="eg:- Apple"
              name="brand"
              onChange={handleInputChange}
            />

            <label>Stock</label>
            <input
              type="number"
              placeholder="eg:- 50"
              name="stock"
              onChange={handleInputChange}
            />

            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleInputChange}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>

            <label>Categories</label>
            <select multiple name="categories" onChange={handleCategoryChange}>
              <option value="electronics">Electronics</option>
              <option value="accessories">Accessories</option>
              <option value="clothing">Clothing</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
