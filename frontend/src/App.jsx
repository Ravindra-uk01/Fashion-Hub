import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from './reducers/userReducer';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Success from './pages/Success';

function App() {
  const {user, loggedIn} = useSelector((state)=> state.user);

  const dispatch = useDispatch();
  useEffect(()=> {
    if(!user){
      dispatch(getProfile);
    }
  },[dispatch, user])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:cat" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/register" element={loggedIn ? <Navigate replace to="/" /> :<Register />} />
          <Route path="/login" element={loggedIn ? <Navigate replace to="/" /> :<Login />} />
          <Route exact path="/forgot_password" element={<ForgotPassword/>} />
          <Route exact path="/reset_password/:token" element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
