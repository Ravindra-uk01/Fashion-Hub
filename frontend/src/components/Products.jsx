import { useEffect, useState } from "react"
import { popularProducts } from "../data"
import "../styles/products.css"
import Product from "./Product"
import newRequest from "../utils/newRequest"

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async()=> {
      try {
        const response = await newRequest.get( cat ? `/products?category=${cat}` : "/products");
        const {status , products} = response.data;
        if(status === 'success'){
          setProducts(products);
        }
        
      } catch (error) {
        console.log('error ', error);
      }
    }

    getProducts();
  },[cat])

  useEffect(()=>{
    cat && 
    setFilteredProducts(products.filter((product)=> 
      Object.entries(filters).every(([key,value]) =>
         product[key].includes(value)
      )
    ))
  },[cat, products, filters])

  useEffect(()=>{
    if(sort === 'newest'){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    }else if(sort === 'asc'){
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price - b.price)
      )
    }else{
      setFilteredProducts((prev) => 
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  },[sort])

  return (
    <div className="products">
        {
          cat ?
          filteredProducts && filteredProducts.length > 0 && filteredProducts.map(
            (product) => 
                  <Product key={product.id} product={product} />
              )
          :
            products && products.length > 0 && products.slice(0,8).map(
              (product) => 
                    <Product key={product.id} product={product} />
                )
        }
    </div>
  )
}

export default Products