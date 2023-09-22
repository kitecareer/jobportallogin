import React, { useState, useEffect } from "react";
import basestyle from "../profile/Base.module.css";
import loginstyle from "./Login.module.css";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { NavLink } from "react-router-dom";
import { makeAuthenticatedRequest } from './api.js'; // Import the authentication function

const Login = ({ setUserState }) => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
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
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  const handleSuccessfulLogin = (user) => {
    // Store the JWT token in local storage
   

    // Redirect to the profile page or perform other actions
    // ...
    const profileUrl = `/#/profile?user=${encodeURIComponent(JSON.stringify(user))}`;
    // Example: Redirect to the profile page
 
    window.location.href = profileUrl;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log ("Submitting form and making API request");
      localStorage.setItem('jwtToken', user.token);
      // Make an authenticated API request using the JWT token
      makeAuthenticatedRequest('https://kitecareer.com/jobapp/login', user)
        .then((res) => {
          console.log("Api Response :", res.data)
          alert(res.data.message);
          handleSuccessfulLogin(res.data);
        })
        .catch((error) => {
          console.log("Api Error :",error);
          alert("Invalid credentials");
        });
    }
  }, [formErrors, isSubmit]);
  return (
    <div className="d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src={require('../../assets/images/logo.png')} alt="logo" />
            </div>
            <h4>Hello! Let's get started</h4>
      
            <Form className="pt-3">
              <h1>Login</h1>
              <Form.Group className="d-flex search-field">
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={changeHandler}
                  value={user.email}
                />
              </Form.Group>
              <p className={basestyle.error}>{formErrors.email}</p>
              <Form.Group className="d-flex search-field">
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={changeHandler}
                  value={user.password}
                />
              </Form.Group>
              <p className={basestyle.error}>{formErrors.password}</p>
              <div className="mt-3">
                <Button onClick={loginHandler} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                  Sign In
                </Button>
              </div>
            </Form>
            <NavLink to="/user-pages/register-1">Not yet registered? Register Now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;