import './App.css'
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/products/:cat" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/register" element={loggedIn ? <Navigate replace to="/" /> :<Register />} />
          <Route path="/login" element={loggedIn ? <Navigate replace to="/" /> :<Login />} />
          <Route exact path="/forgot_password" element={<ForgotPassword/>} />
          <Route exact path="/reset_password/:token" element={<ResetPassword/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
