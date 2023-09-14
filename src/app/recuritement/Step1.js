import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import ReactDatePicker from "react-datepicker";

import {  Form , Button } from "react-bootstrap";
function Step1() {
    const [startDate, setStartDate] = useState();
    const [file, setFile] = useState();
    
    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
    <div>Step1</div>
    <div>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          placeholder="Firstname"
          aria-label="Firstname"
         aria-describedby="basic-addon1"
        />
      </Form.Group>
    
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Middlename</Form.Label>
        <Form.Control
          placeholder="Middlename"
          aria-label="Middlename"
          aria-describedby="basic-addon1"
        />
   
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          placeholder="Lastname"
          aria-label="Lastname"
         aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter Your Email Id</Form.Label>
        <Form.Control
          aria-label="emailid"
          type="email"
          placeholder="Enter email"
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
        
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Adhar number</Form.Label><br/>
        <Form.Control
          placeholder="Aadhar number"
          aria-label="Aadhar number"
        
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Passport Number</Form.Label><br/>
        <Form.Control
          placeholder="Passport Number"
          aria-label="Passport Number"
          
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
         aria-describedby="basic-addon1"
        />
   
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>differently_abled</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
  </select><br></br>


<Form.Group controlId="formBasicEmail">
        <Form.Label>Address 1</Form.Label><br/>
        <Form.Control
          placeholder="Address 1"
          aria-label="Aadress 1"
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Address 2</Form.Label><br/>
        <Form.Control
          placeholder="Address 2"
          aria-label="Address 2"
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label><br/>
        <Form.Control
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>PinCode</Form.Label><br/>
        <Form.Control
          placeholder="PinCode"
          aria-label="PinCode"
          aria-describedby="basic-addon1"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Landmark</Form.Label><br/>
        <Form.Control
          placeholder="Landmark"
          aria-label="Landmark"
          aria-describedby="basic-addon1"
        />
      </Form.Group>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Status</Form.Label><br/>
        
        <select name="select option">
        <option value="select">selecet</option>
  <option value="Active">Active</option>
  <option value="inActive">inActive</option>
  

</select>
      <Button variant="primary" type="submit">
        Save
      </Button>
      </Form.Group>
    </div>
    </>
  )
}
export default Step1   