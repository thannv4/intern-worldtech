import { Link } from "react-router-dom";
import "./regsiter.scss";
const Regsiter = () => {
    return (
        <div className="regsiter-form">
          <h1>Sign up</h1>
          <div className='input-group'>
            <label>
              E-mail address
              <input style={{marginLeft:66}}  type="email" />
            </label>
          </div>
          <div className='input-group'>
            <label>
              Password
              <input style={{marginLeft:102}} type="password" />
            </label>
          </div>
          <div className='input-group'>
            <label>
                confirm password
              <input style={{marginLeft:43}} type="password" />
            </label>
          </div>
          <div className='buttons'>
          <button className="regsiter-button">Sign up</button>
          <p>OR</p>
          <button className="regsiter-button"><Link to="/login" style={{color:"white"}}>Sign in</Link></button>
          </div>
        </div>
      );
}
export default Regsiter;