import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:cat" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={user ? <Navigate replace to="/" /> :<Register />} />
          <Route path="/login" element={user ? <Navigate replace to="/" /> :<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
