import React, { useEffect, useState } from "react";
import basestyle from "../profile/Base.module.css";

import axios from "axios";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {  NavLink } from "react-router-dom";
//import {useNavigate} from "react-router-dom"

const Register = () => {
 // const navigate = useNavigate();
  const history = useHistory();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      error.fname = "First Name is required";
    }
    if (!values.lname) {
      error.lname = "Last Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {
    //   setIsSubmit(true);
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("https://kitecareer.com/jobapp/register", user).then((res) => {
        alert(res.data.message);
        history.push('/login');
        //navigate("/login", { replace: true });
      });
    }
  }, [formErrors]);
  return (
    <>
     <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require('../../assets/images/logo.png')} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                  <input  type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.fname} className="form-control form-control-lg"  />
                  </div>
                  <p className={basestyle.error}>{formErrors.fname}</p>
                  <div className="form-group">
                    <input type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lname} className="form-control form-control-lg"  />
                  </div>
                  <p className={basestyle.error}>{formErrors.lname}</p>
          
          
          <div className="form-group">
                    <input type="email"
            name="email"
             
            
            onChange={changeHandler}
            value={user.email} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
          
         
        
          <p className={basestyle.error}>{formErrors.email}</p>
          <div className="form-group">
                    <input type="password"
            name="password"
            
            onChange={changeHandler}
            value={user.password} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
         
          <p className={basestyle.error}>{formErrors.password}</p>
          <div className="form-group">
                    <input  type="password"
            name="cpassword"
           
            onChange={changeHandler}
            value={user.cpassword} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
        
          <p className={basestyle.error}>{formErrors.cpassword}</p>
          <Button onClick={signupHandler} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                    Sign In
                    </Button>
          
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};
export default Register;
