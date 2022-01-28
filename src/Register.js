import React from "react";
import './Login.css';
import { useState } from "react";
import axios from 'axios';

function Login() {
  const [validationError, setValidationError] = useState(false);
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [mobile , setMobile] = useState("");
  const [password , setPassword] = useState("");
  const [list, setList] = useState([]);
  const onChangeusername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };

  const onChangemobile = (e) => {
    setMobile(e.target.value);
  };

  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const userRegister = async () =>{
    if((username.match(/[a-zA-Z]/g) && username.length >5)&&(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8))
    // if(username = "" || email == "" || mobile == "" , password =="")
    {
      alert(`You are registered !!`);
    }
    else
    {
      alert("invalid !! Username sholud be atleast 6 characters and password should contain atleast 1 uppercase 1 lowercase 1 digit 1 special character and should have atleast atleast 8 characters");
      setValidationError(true);
      return;
      
    }

    const url = "http://localhost:5000/add-user";
    const data = {
      username : username,
      email : email,
      mobile : mobile,
      password : password,
    };


    await axios.post(url, data);

    const newlist = [data, ...list];
    setList(newlist);

    setUsername("");
    setEmail("");
    setMobile("");
    setPassword("");

  }

  const getUsers = async () => {
    const url = "http://localhost:5000/users";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };
  return (
    <>
      <div className="divform">
  <div className="container">
    <div className="row px-3">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div className="img-left d-none d-md-flex"></div>

        <div className="card-body">
          <h4 className="title text-center mt-4">
             Register account
          </h4>
          <form className="form-box px-3">
          <div className="form-input">
              <span><i className="fa fa-user"></i></span>
              <input type="text" name="" placeholder="Full Name" tabindex="10"  value={username} onChange={onChangeusername}
                  className={username == "" && validationError ? "border border-danger" : ""} />
            </div>
            <div className="form-input">
              <span><i className="fa fa-envelope-o"></i></span>
              <input type="email" name="" placeholder="Email Address" tabindex="10" value={email} onChange={onChangeemail}
                  className={email == "" && validationError ? "border border-danger" : ""} />
            </div>
            <div className="form-input">
              {/* <span><i className="fa fa-key"></i></span> */}
              <input type="text" name="" placeholder="Mobile" value={mobile} onChange={onChangemobile}
                  className={password == "" && validationError ? "border border-danger" : ""} />
            </div>
            <div className="form-input">
              <span><i className="fa fa-key"></i></span>
              <input type="password" name="" placeholder="Re-enter Password" value={password} onChange={onChangepassword}
                  className={password == "" && validationError ? "border border-danger" : ""} />
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase"onClick={userRegister}>
              Register
              </button>
            </div>

            <div className="text-center mb-2">
              <div className="text-center mb-3" style={{color: "#777"}}>or login with</div>
                
              
              <a to="" className="btn btn-social btn-facebook rounded-circle"><i className="fa fa-facebook"></i></a>

            
   <a to="" className="btn btn-social btn-google rounded-circle" style={{position:"relative"}}><i className="fa fa-google"></i></a>

   
   <a to="" className="btn btn-social btn-twitter rounded-circle"><i className="fa fa-twitter"></i></a>
 </div>

            <hr className="my-4" />

            <div className="text-center mb-2">
              Alreay have account?
              <a href='./login' className="register-link">
                Login here
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

    /* <div className="divform">
  <div className="container">
    <div className="row px-3">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div className="img-left d-none d-md-flex"></div>

        <div className="card-body">
          <h4 className="title text-center mt-4">
            Login into account
          </h4>
          <form className="form-box px-3">
          <div className="form-input">
              <span><i className="fa fa-user"></i></span>
              <input type="text" name="" placeholder="Full Name" tabindex="10" required />
            </div>
            <div className="form-input">
              <span><i className="fa fa-envelope-o"></i></span>
              <input type="email" name="" placeholder="Email Address" tabindex="10" required />
            </div>
            <div className="form-input">
              <span><i className="fa fa-key"></i></span>
              <input type="password" name="" placeholder="Password" required />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                <label className="custom-control-label" for="cb1">Remember me</label>
              </div>
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-block text-uppercase">
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
                
              
              <a to="" className="btn btn-social btn-facebook rounded-circle"><i className="fa fa-facebook"></i></a>

            
   <a to="" className="btn btn-social btn-google rounded-circle"><i className="fa fa-google"></i></a>

   
   <a to="" className="btn btn-social btn-twitter rounded-circle"><i className="fa fa-twitter"></i></a>
 </div>

            <hr className="my-4" />

            <div className="text-center mb-2">
              Don't have an account?
              <a href='#' className="register-link">
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div> */
    

export default Login;
