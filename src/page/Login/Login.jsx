import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  return (
    <div className="login-form">
      {/* <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <i class="uil uil-16-plus"></i> */}
      <h1>Sign in</h1>
      <div className="input-group">
        <label>
          E-mail address
          <input style={{ marginLeft: 30 }} type="email" />
        </label>
      </div>
      <div className="input-group">
        <label>
          Password
          <input style={{ marginLeft: 66 }} type="password" />
        </label>
      </div>
      <div className="buttons">
        <button className="login-button">Sign in</button>
        <p>OR</p>
        <button className="login-button">
          <Link to="/signup" style={{ color: "white" }}>
            Sign up
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Login;
