import { Publish } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import { productData } from '../../dummyData'
import Chart from '../../components/chart/Chart'
import './product.css'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../reducers/productReducer'

const Product = () => {

    const {product} = useSelector(state => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
     const [prodStats, setProdStats] = useState([]);
    
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
    
      
      useEffect(() => {
        const getStats = async () => {
          try {
            const res = await newRequest.get("/users/stats");
    
            if (res && res.data && res.data.userStats) {
              const stats = res.data.userStats.map((item) => ({
                name: MONTHS[item._id - 1],
                "Active User": item.total,
              }));
              setUserStats(stats);
            } else {
              console.log("No data received.");
            }
          } catch (err) {
            console.error("Error fetching stats:", err);
          }
        };
        getStats();
      }, [MONTHS]);

    useEffect(()=> {
        dispatch(getProductById(productId));
    },[dispatch, productId]);

    useEffect(()=> {
        dispatch(getProductById(productId));    
    },[dispatch, productId]);

    // console.log('product Id is ', productId);
    // console.log('product is ', product);

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
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.image} alt="" className="productInfoImg" />
                  <span className="productName">{product.name}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Price:</span>
                      <span className="productInfoValue">₹ {product.price}</span>
                  </div>
                 
                  <div className="productInfoItem">
                      <span className="productInfoKey">In stock:</span>
                      <span className="productInfoValue">{product.stock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>Product Description</label>
                  <input type="text" placeholder="Apple AirPod description" />
                  <label>Price</label>
                  <input type="number" placeholder="eg:- 1000" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Product