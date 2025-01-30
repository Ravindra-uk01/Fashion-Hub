import { popularProducts } from "../data"
import "../styles/products.css"
import Product from "./Product"

const Products = () => {
  return (
    <div className="products">
        {
            popularProducts && popularProducts.length > 0 && popularProducts.map((product) => {
                return (
                    <Product key={product.id} product={product} />
                )
            })
        }
    </div>
  )
}

export default Products