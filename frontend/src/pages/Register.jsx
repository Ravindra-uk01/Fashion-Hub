import "../styles/register.css";

const Register = () => {
  return (
    <div className="register_container">
      <div className="register">
        <span className="registerTitle">CREATE AN ACCOUNT</span>
        <form className="registerForm">
          <input
            type="text"
            className="registerInput"
            placeholder="first name"
          />
          <input
            type="text"
            className="registerInput"
            placeholder="last name "
          />
          <input
            type="text"
            className="registerInput"
            placeholder="Username"
          />
          <input
            type="text"
            className="registerInput"
            placeholder="Email"
          />
          <input
            type="password"
            className="registerInput"
            placeholder="Password"
          />
          <input
            type="password"
            className="registerInput"
            placeholder="Confirm Password"
          />
          <div className="registerAggrement" >
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY.</b>
          </div>
          <button className="registerButton">Register</button>
        </form>
        {/* <button className="registerLoginButton">Login</button> */}
      </div>
    </div>
  );
};

export default Register;
