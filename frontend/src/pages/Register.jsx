import { useState } from "react";
import "../styles/register.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../schemas/authSchema";
import { addUser } from "../reducers/userReducer";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const [isFocus, setIsFocus] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data, e) => {
    console.log(data);
    e.preventDefault();
    try{
      dispatch(addUser(data));
      console.log('user added successfully. ')
    }catch(error){
      console.error('Failed to add user:', error);
    }
  };


  return (
    <div className="register_container">
      <ToastContainer />
      <div className="register">
        <span className="registerTitle">CREATE AN ACCOUNT</span>
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="registerFormDiv" >
            <input
              type="text"
              className="registerInput"
              placeholder="first name*"
              {...register("first_name")}
            />
            <p className="err_msg">{errors.first_name?.message}</p>
          </div>

          <div className="registerFormDiv">
            <input
              type="text"
              className="registerInput"
              placeholder="last name "
              {...register("last_name")}
            />
          </div>
          <div className="registerFormDiv">
            <input
              type="text"
              className="registerInput"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <div className="registerFormDiv">
            <input
              type="text"
              className="registerInput"
              placeholder="Email*"
              {...register("email")}
            />
            <p className="err_msg">{errors.email?.message}</p>
          </div>

          <div className="registerFormDiv">
            <input
              type="password"
              className="registerInput"
              placeholder="Password*"
              {...register("password")}
            />
            <p className="err_msg">{errors.password?.message}</p>
          </div>

          <div className="registerFormDiv">
            <input
              type="password"
              className="registerInput"
              placeholder="Confirm Password*"
              {...register("confirm_password")}
            />
            <p className="err_msg">{errors.confirm_password?.message}</p>
          </div>
          <div className="registerAggrement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY.</b>
          </div>
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        {/* <button className="registerLoginButton">Login</button> */}
      </div>
    </div>
  );
};

export default Register;
