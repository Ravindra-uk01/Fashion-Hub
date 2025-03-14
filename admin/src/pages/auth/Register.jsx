import { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { registrationSchema } from "../../schemas/authSchema";
import { addUser } from "../../reducers/userReducer";
import Loader from "../../components/ui/Loader";

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const userData = {
    first_name:  watch('first_name'),
    last_name:  watch('last_name'),
    username:  watch('username'),
    email:  watch('email'),
    password:  watch('password'),
    confirm_password:  watch('confirm_password'),
  }

  const onSubmit = async (data, e) => {
    console.log(data);
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(addUser(data));
      setLoading(false);
      reset({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      window.setTimeout(() => {
        navigate('/');
      }, 1500);
      console.log("user added successfully. ");
    } catch (error) {
      setLoading(false);
      console.error("Failed to add user:", error);
    }
  };

  console.log( "errors is ", errors);

  return (
    <div className="register_container">
      <ToastContainer />
      <div className="register">
        <span className="registerTitle">CREATE AN ACCOUNT</span>
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="registerFormDiv">
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
            <div className="registerPasswordDiv">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="registerInput"
                placeholder="Password*"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="toggle-password reg"
              >
                {isPasswordVisible ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </button>
            </div>
            <p className="err_msg">{errors.password?.message}</p>
          </div>

          <div className="registerFormDiv">
            <div className="registerPasswordDiv">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="registerInput"
                placeholder="Confirm Password*"
                {...register("confirm_password")}
              />
              <button
                type="button"
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
                className="toggle-password reg"
              >
                {isConfirmPasswordVisible ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </button>
            </div>
            <p className="err_msg">{errors.confirm_password?.message}</p>
          </div>
          <div className="registerAggrement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY.</b>
          </div>
          <button className="registerButton" type="submit" disabled={loading}>
            { loading ? <Loader/> :"Register"}
          </button>
        </form>
        <div className="register_links">
          <Link to={"/login"}>
            Already Have an Account? <br />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
