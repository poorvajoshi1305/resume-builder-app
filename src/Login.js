import React from "react";
import './Login.css';
import { useState } from "react";
// import axios from "axios";
import './Login.css';
// import { useState } from "react";

function Login() {
  const [validationError, setValidationError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [userList, setUserList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const loginUser = () => {

    if (username == "" || password == "" || email == "") {
      setValidationError(true);
      return;
    }

    const user = {
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };
    const newList = [user, ...userList];
    setUserList(newList);

    // Clear in the End
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");

    setValidationError(false);
  };
  return (
    <>
      <div className="divform">
  <div className="container">
    <div className="row px-3 mt-5 mb-5">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div className="img-left d-none d-md-flex"></div>

        <div className="card-body">
          <h4 className="title text-center mt-4">
            Login into account
          </h4>
          <form className="form-box px-3">
          <div className="form-input">
              <span><i className="fa fa-user"></i></span>
              <input type="text" name="" placeholder="Full Name" tabindex="10"  value={username} onChange={handleUsername}
                  className={username == "" && validationError ? "border border-danger" : ""} />
            </div>
            <div className="form-input">
              <span><i className="fa fa-envelope-o"></i></span>
              <input type="email" name="" placeholder="Email Address" tabindex="10" value={email} onChange={handleEmail}
                  className={email == "" && validationError ? "border border-danger" : ""} />
            </div>
            <div className="form-input">
              <span><i className="fa fa-key"></i></span>
              <input type="password" name="" placeholder="Password" value={password} onChange={handlePassword}
                  className={password == "" && validationError ? "border border-danger" : ""} />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                <label className="custom-control-label" for="cb1">Remember me</label>
              </div>
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase"onClick={loginUser}>
                Login
              </button>
            </div>

            <div className="text-right">
              <a href='#' className="forget-link">
                Forget Password?
              </a>
            </div>


            <div className="text-center mb-2">
              <div className="text-center mb-3" style={{color: "#777"}}>or login with</div>
                
              
              <a to="" className="btn btn-social btn-facebook mr-1 sm-1"><i className="fa fa-facebook"></i></a>

            
              <a to="" className="btn btn-social btn-google rounded-circle mr-1" style={{position:"relative"}}><i className="fa fa-google"></i></a>

   
              <a to="" className="btn btn-social btn-twitter rounded-circle"><i className="fa fa-twitter"></i></a>
              </div>

            <hr className="my-4" />

            <div className="text-center mb-2">
              Don't have an account?
              <a href='./register' className="register-link">
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </>

  );
}

export default Login;
  
  
