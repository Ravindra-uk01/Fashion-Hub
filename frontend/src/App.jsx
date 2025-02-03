import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
