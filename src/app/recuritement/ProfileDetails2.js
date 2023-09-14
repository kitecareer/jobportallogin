import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
//import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TableData from "../TableData.json";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import ReactDatePicker from "react-datepicker";
import MultiStep from 'react-multistep'
import StepOne from "./Step1";
import StepTwo from "./Step2";

const LoginForm = ({ onSubmit }) => {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState();
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  return (
    <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          placeholder="Firstname"
          aria-label="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Middlename</Form.Label>
        <Form.Control
          placeholder="Middlename"
          aria-label="Middlename"
          value={middlename}
          onChange={(e) => setMiddlename(e.target.value)}
          aria-describedby="basic-addon1"
        />
      
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          placeholder="Lastname"
          aria-label="Lastname"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter Your Email Id</Form.Label>
        <Form.Control
          
          aria-label="emailid"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label><br/>
     
      
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="other">Other</option>
</select> 
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Date Of Birth</Form.Label><br/>
        
  <ReactDatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy"/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Marital Status</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Single">Single</option>
  <option value="Married">Married</option>

</select>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Pan Number</Form.Label><br/>
        <Form.Control
          placeholder="Pan Number"
          aria-label="Pan Number"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Adhar number</Form.Label><br/>
        <Form.Control
          placeholder="Aadhar number"
          aria-label="Aadhar number"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Passport Number</Form.Label><br/>
        <Form.Control
          placeholder="Passport Number"
          aria-label="Passport Number"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Passport Expire Date</Form.Label><br/>
        
  <ReactDatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy"/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>User Type</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Single">Employee</option>
  <option value="Married">Recuriter</option>
  

</select>
      </Form.Group>
      <Form.Label htmlFor="basic-url">Linked In URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://www.linkedin.com/user/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Label htmlFor="basic-url">FaceBook URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://www.facebook.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Label htmlFor="basic-url">twitter URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
        https://twitter.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Work Status</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Single">Open to work</option>
  <option value="Married">Notice Period</option>
  

</select>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Resume Upload</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add Your Profile picture</Form.Label><br/>
      
            <input type="file" onChange={handleChange} />
            <img src={file} width={100} height={120} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label><br/>
        <Form.Control
          placeholder="Mobile Number"
          aria-label="Mobile Number"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          aria-describedby="basic-addon1"
        />
   
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>differently_abled</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
  

</select>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Status</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selec
        t</option>
  <option value="Active">Active</option>
  <option value="inActive">inActive</option>
  

</select>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Added On</Form.Label><br/>
        
  <ReactDatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy"/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Updated on</Form.Label><br/>
        
  <ReactDatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy"/>
      </Form.Group>
      
     

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  );
};

function RecurProfileDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Recuritement </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Recuritement
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Profile Details
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Profile Details
                <div>
                  <Button
                    className="btn btn-success btn-sm float-right"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Add Profile
                  </Button>
                </div>
                {/* <Link className='btn btn-success btn-sm float-right' to="/recuritement/basic-elements">Add Profile</Link> */}
              </h4>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Profile Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <LoginForm onSubmit={onLoginFormSubmit} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close Modal
                  </Button>
                </Modal.Footer>
              </Modal>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> User </th>
                      <th> First name </th>
                      <th> Skill Capacity</th>
                      <th> Last Updated Date</th>
                      <th> Status </th>
                      <th> Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*                       {TableData.map((data, i) => {
                        this.skillVariant = '0';
                        if (data.skillCapacity > 0 && data.skillCapacity < 36) {
                          this.skillVariant = "danger"
                        } else if (data.skillCapacity > 37 && data.skillCapacity < 76) {
                          this.skillVariant = "warning"
                        } else { this.skillVariant = "success" }

                        this.profileStatus = '0';
                        if (data.status.toLowerCase() === 'rejected') {
                          this.profileStatus = "badge badge-danger"
                        } else if (data.status.toLowerCase() === 'inprogress') {
                          this.profileStatus = "badge badge-warning"
                        } else { this.profileStatus = "badge badge-success" }

                        return (

                          <tr key={i}>
                            <td className="py-1">
                              <img src={data.path} alt="user icon" />
                            </td>
                            <td> {data.fullName}</td>
                            <td> <ProgressBar striped variant={this.skillVariant} now={data.skillCapacity} /> </td>
                            <td> {data.lastUpdatedDate} </td>
                            <td> <label class={this.profileStatus}>{data.status}</label> </td>
                            <td>          <button type="button" className="btn btn-gradient-dark btn-icon-text">
                              Edit
                              <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                              <button type="button" className="btn btn-gradient-danger btn-icon-text">
                                <i className="mdi mdi-delete btn-icon-trash"></i>
                                Delete
                              </button>
                            </td>
                          </tr>
                        )

                      })
                      }*/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecurProfileDetails;
