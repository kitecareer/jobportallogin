import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import swal from 'sweetalert';

async function loginUser(credentials) {
  console.log('loginUser');
  return fetch('https://www.melivecode.com/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
    console.log('loginUser1212');
}

export default function Login() 
{
  console.log('login');
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('token' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
        .then((value) => {
          localStorage.setItem('token', response['token']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          window.location.href = "/dashboard";
        });
    } else {
      swal("Failed", response.message, "error");
    }
  }

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require('../../assets/images/logo.png')} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <Form className="pt-3" onSubmit={handleSubmit}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email_id" placeholder="email_id" size="lg" className="h-auto"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="password" size="lg" className="h-auto"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mt-3">
                    <Button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                    Sign In
                    </Button>
                      {/* <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</Link> */}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }