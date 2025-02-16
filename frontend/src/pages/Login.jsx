import { Link, useNavigate } from "react-router-dom"
import "../styles/login.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/authSchema";
import newRequest from "../utils/newRequest";
import { toast, ToastContainer } from "react-toastify";
import { setProfile } from "../reducers/userReducer";

const Login = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  // const API = import.meta.env.VITE_API;
  const toastData = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await newRequest.post(`auth/login`, data);
      const { status, message, user , token} = res.data;

      if (status === "success") {
        toast.success(message, { ...toastData });
        // localStorage.setItem("token", token);
        dispatch(setProfile({user}));
      } else {
        toast.warn(message, { ...toastData });
      }

    } catch (err) {
      const { status, message } = err.response.data;
      if (status === "warning") {
        toast.warn(message, {
          ...toastData,
        });
      } else {
        toast.error(message, {
          ...toastData,
        });
      }
    }
    finally{
      setLoading(false);
    }
  };



  return (
    <div className="login_container">
      <ToastContainer />
      <div className="login">
        <span className="loginTitle">SIGN IN</span>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)} >

          <input
            type="text"
            className="loginInput"
            placeholder="Email*"
            {...register("email")}
          />
            <p className="err_msg">{errors.email?.message}</p>

          <input
            type="password"
            className="loginInput"
            placeholder="Password*"
            {...register("password")}
          />
            <p className="err_msg">{errors.password?.message}</p>

          <button className="loginButton" type="submit" >Login</button>
        </form>
        <div className="login_other_links" >
          <Link to={"/forgot_password"} >DO NOT YOU REMEMBER THE PASSWORD? <br/></Link>
          <Link to={"/register"} >CREATE A NEW ACCOUNT</Link>
        </div>
      </div>
    </div>
  )
}

export default Login