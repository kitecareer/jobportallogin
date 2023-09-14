import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import ReactDatePicker from "react-datepicker";
import {  Form , Button, Alert } from "react-bootstrap";
import Axios from "axios";

function Addjob() {
    const [ exp_from, setexp_from] = useState();
    const [createDate, setcreateDate] = useState();
    const [exp_to, setexp_to] = useState();
    const [file, setFile] = useState();
    const [validated, setValidated] = useState(false);
    const [jobid, setjobid] = useState("");
    const [skills, setskills] = useState("");
    const [description, setdescription] = useState("");
    const [title, setTitle] = useState("");
    const [contact, setcontact] = useState("");
    const [salary, setSalary] = useState("");
    const [locations, setLocations] = useState("");
    const [status, setStatus] = useState("select");
    const [submitError, setSubmitError] = useState("");
    async function submitJob() {
      try {
        const response = await Axios.post("https://kitecareer.com/jobapp/jobs", {
          jobid,
          title,
          description,
          salary,
          exp_from,
          
          skills,
          contact,
          locations,
          status,
          exp_to,
        });
  
        console.log("Job added successfully", response.data);
  
        setjobid("");
        setTitle("");
        setdescription("");
        setSalary("");
        setexp_from(null);
        
        setskills("");
        setcontact("");
        setLocations("");
        setStatus("select");
        setexp_to(null);
  
        setSubmitError("");
      } catch (error) {
        console.error("Error adding job", error);
  
        setSubmitError("Error adding job. Please try again.");
      }
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
  
      if (form.checkValidity() === false) {
        e.stopPropagation();
      }
      setValidated(true);
  
      if (form.checkValidity()) {
        submitJob();
        alert("add job successfully")
      }
    };

  return (
    <>
     <div className="row">
          <div className="col-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
    <div>Add Job</div>
    <div>
    <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label> Job ID</Form.Label>
        <Form.Control
          placeholder="job id"
          aria-label="job id"
          value={jobid}
          onChange={(e) => setjobid(e.target.value)}
          disabled
          required
          aria-describedby="basic-addon1"
        />
        <Form.Control.Feedback type="invalid">
             Job id is required.
            </Form.Control.Feedback>
      </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label> Job Title</Form.Label>
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
        <Form.Label> Job Description</Form.Label>
        <Form.Control
          placeholder="Job Description"
          aria-label="Job Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
        <Form.Control.Feedback type="invalid">
              Job Description is required.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>salary</Form.Label>
        <Form.Control
          placeholder="Salary"
          aria-label="salary"
          aria-describedby="basic-addon1"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          salary is required.
        </Form.Control.Feedback>
        </Form.Group>
    
    
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Experience From</Form.Label>
        <Form.Control
          placeholder="dd/mm/yyyy"
          aria-label="Experiance From"
          aria-describedby="basic-addon1"
          value={ exp_from}
          onChange={(e) => setexp_from(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
        Experience from is required.
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Experience End</Form.Label>
        <Form.Control
          placeholder="dd/mm/yyyy"
          aria-label="Experience End"
          aria-describedby="basic-addon1"
          value={exp_to}
          onChange={(e) => setexp_to(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Experience End is required.
        </Form.Control.Feedback>
        </Form.Group>
    
     {/* <Form.Group controlId="formBasicEmail">
        <Form.Label>Experience from</Form.Label><br/>
        
  <ReactDatePicker selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM , yyyy"
      value={startDate}  required
      
      />
       <Form.Control.Feedback type="invalid">
              Experience from is required.
            </Form.Control.Feedback>
  </Form.Group>*/}
       
       
    {/*  <Form.Group controlId="formBasicEmail">
        <Form.Label>Experience from End </Form.Label><br/>
        
  <ReactDatePicker selected={endDate}
      onChange={(date) => setEndDate(date)}
      dateFormat="MMMM , yyyy"
      required
      />
</Form.Group>*/}
      <Form.Group controlId="formBasicEmail">
        <Form.Label> Skills</Form.Label>
        <Form.Control
          placeholder="skills"
          aria-label="Title"
          value={skills}
          onChange={(e) => setskills(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
        <Form.Control.Feedback type="invalid">
              Skills is required.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label> Contact</Form.Label>
        <Form.Control
          placeholder="Contact"
          aria-label="Title"
          value={contact}
          onChange={(e) => setcontact(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
        <Form.Control.Feedback type="invalid">
              contact is required.
            </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Location</Form.Label><br/>
        <Form.Control
          placeholder="Location"
          aria-label="Location"
        
          aria-describedby="basic-addon1"
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
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
              placeholder="Select status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
             
              <option value="Active">Active</option>
              <option value="inActive">Inactive</option>
              
            </Form.Control >
            <Form.Control.Feedback type="invalid">
              
              Status is required.
            </Form.Control.Feedback>
          </Form.Group>
         
      <Button variant="primary" onClick={handleSubmit} type="submit">
            Save
          </Button>
     </Form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Addjob