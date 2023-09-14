import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import ReactDatePicker from "react-datepicker";
import {  Form , Button, Alert } from "react-bootstrap";

function Step3() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [file, setFile] = useState();
    const [validated, setValidated] = useState(false);
    
    const [title, setTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("select");
    const [submitError, setSubmitError] = useState("");
  


    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
     setValidated(true);

    // Perform further submission logic if the form is valid
    if (form.checkValidity()) {
      console.log("Form submitted");
      // Reset validation state and clear the form
      
    }
  };


  return (
    <>
    <div>Step3</div>
    <div>
    <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
    >
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          placeholder="title"
          aria-label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
        <Form.Control.Feedback type="invalid">
              Title is required.
            </Form.Control.Feedback>
      </Form.Group>


      <Form.Group controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          placeholder="Company Name"
          aria-label="Company Name"
          aria-describedby="basic-addon1"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Company Name is required.
        </Form.Control.Feedback>
        </Form.Group>
    
    
    
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Start Date</Form.Label><br/>
        
  <ReactDatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM , yyyy"
      value={startDate}  required
      
      />
       <Form.Control.Feedback type="invalid">
              Start Date is required.
            </Form.Control.Feedback>
      </Form.Group>
       
       
      <Form.Group controlId="formBasicEmail">
        <Form.Label>End Date</Form.Label><br/>
        
  <ReactDatePicker selected={endDate}
      onChange={(date) => setEndDate(date)}
      dateFormat="MMMM , yyyy"
      required
      />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Location</Form.Label><br/>
        <Form.Control
          placeholder="Location"
          aria-label="Location"
        
          aria-describedby="basic-addon1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Location is required.
        </Form.Control.Feedback>
      </Form.Group>
      

     
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Status</Form.Label><br/>
        
        <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="select">Select status</option>
              <option value="Active">Active</option>
              <option value="inActive">Inactive</option>
              
            </Form.Control >
            <Form.Control.Feedback type="invalid">
              
              Status is required.
            </Form.Control.Feedback>
          </Form.Group>

          {submitError && (
            <Alert variant="danger">
              {submitError}
            </Alert>
          )}
      <Button variant="primary" onClick={handleSubmit} type="submit">
            Save
          </Button>
     </Form>
    </div>
    </>
  )
}

export default Step3