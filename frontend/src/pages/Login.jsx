import { Link } from "react-router-dom"
import "../styles/login.css"

const Login = () => {
  return (
    <div className="login_container">
      <div className="login">
        <span className="loginTitle">SIGN IN</span>
        <form className="loginForm">
    
          <input
            type="text"
            className="loginInput"
            placeholder="Email"
          />
          <input
            type="password"
            className="loginInput"
            placeholder="Password"
          />
          <button className="loginButton">Login</button>
        </form>
        <Link>DO NOT YOU REMEMBER THE PASSWORD? <br/></Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </div>
    </div>
  )
}

export default Login