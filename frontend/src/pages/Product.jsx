import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../styles/product_page.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useParams } from "react-router-dom";
import newRequest from "../utils/newRequest";
import {useDispatch} from "react-redux";
import { addProduct } from "../reducers/cartReducer";

const Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(()=> {

    const getProduct = async() => {
      try {
        const response = await newRequest.get(`/products/id/${id}` );

        const {status , product} = response.data;
        if(status === 'success'){
          setProduct(product);
        }

      } catch (error) {
        console.log('error is ', error);
      }
    }
    getProduct();
  },[id])

  const handleQuantity = (type) => {
    if(type === 'inc'){
      setQuantity(quantity + 1);
    }else{
      quantity> 0 &&  setQuantity(quantity - 1);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, quantity, color, size }));
  }

  return (
    <>
      <Navbar />
      <Announcement />
      <div className="product_container">
        <div className="product_image">
          <img src={product?.image} alt="product" />
        </div>
        <div className="product_info">
          <h1 className="product_name">{product?.name}</h1>
          <p className="product_description">
            {product?.description}
          </p>
          <p className="product_price"> ₹ {product?.price}</p>
          <div className="product_filter">
            <label>Color</label>
            <select name="color" id="color" onChange={(e)=> setColor(e.target.value)} >
              {
                product?.color && product?.color.length> 0 && product?.color.map((color) => {
                  return (
                    <option value={color} key={color} >{color}</option>
                  )
                })
              }
            </select>
            <label>Size</label>
            <select name="size" id="size" onChange={(e)=> setSize(e.target.value)}>
              {
                product?.size && product?.size.length> 0 && product?.size.map((size) => {
                  return (
                    <option value={size} key={size} >{size}</option>
                  )
                })
              }
            </select>
          </div>

          <div className="product_buttons">
            <div className="product_quantity">
              <button onClick={()=>handleQuantity('dec')} >
                <RemoveOutlinedIcon />
              </button>
              <div>{quantity}</div>
              <button onClick={()=>handleQuantity('inc')} >
                <AddOutlinedIcon />{" "}
              </button>
            </div>
            <button className="product_button" onClick={handleClick} >ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
