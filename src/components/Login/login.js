import "./login.css";
import { Mail, LockClosed } from "react-ionicons";

function login() {
  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <Mail />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <LockClosed />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me?
            </label>
            <a href="#forgotpass">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register"></div>
        </form>
      </div>
    </div>
  );
}

export default login;
