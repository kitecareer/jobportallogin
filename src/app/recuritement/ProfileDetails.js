import React, { useState,useEffect } from "react";
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
import Step3 from "./Step3";
import Step4 from "./step4";
import Step5 from "./step5";
import axios from "axios";


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
       
       <MultiStep className='multistep' //activeStep={0} prevButton={prevButton} nextButton={nextButton}
       >
    <StepOne title='Personal'/>
    <StepTwo title='Education'/>
    <Step3 title='Experience'/>
    <Step4 title='Certificate'/>
    <Step5 title='Skills'/>
  </MultiStep>
      </Form.Group>
      </Form>
  );
};

function RecurProfileDetails() {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user_id, setUserid] = useState('');
  const [course, setCourse] = useState('');
  const [institute_name, setInstitutename] = useState('');
  const [university, setUniversity] = useState('');
  const [year_of_pass, setYearofpass] = useState('');
  const [percentage, setPercentage] = useState('');
  const [status, setStatus] = useState('select');

  const [educationData, setEducationData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch education data from the API when the component mounts
    axios.get('http://localhost:5000/education')
      .then(response => {
        setEducationData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the API: ', error);
      });
  }, []);

  function validateForm() {
    const formErrors = {};
    if (!user_id) {
      formErrors.user_id = "User ID is required";
    }
    if (!course) {
      formErrors.course = "Course is required";
    }
    if (!institute_name) {
      formErrors.institute_name = "Institute Name is required";
    }
    if (!university) {
      formErrors.university = "University is required";
    }
    if (!year_of_pass) {
      formErrors.year_of_pass = "Year of Passing is required";
    }
    if (!percentage) {
      formErrors.percentage = "Percentage is required";
    }
    if (status === 'select') {
      formErrors.status = "Please select a status";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  function handleBlur(field) {
    setTouched({ ...touched, [field]: true });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      user_id: true,
      course: true,
      institute_name: true,
      university: true,
      year_of_pass: true,
      percentage: true,
      status: true,
    });

    if (validateForm()) {
      const formData = {
        user_id,
        course,
        institute_name,
        university,
        year_of_pass,
        percentage,
        status,
      };

      if (editingId !== null) {
        // If editingId is set, update the existing record
        axios.put(`http://localhost:5000/education/${editingId}`, formData)
          .then(response => {
            // Update the educationData array with the edited data
            setEducationData(prevData =>
              prevData.map(item =>
                item.id === editingId ? { ...item, ...formData } : item
              )
            );
            resetForm();
            alert('Data updated successfully!');
          })
          .catch(error => {
            console.error('Error updating data: ', error);
            alert('An error occurred while updating data.');
          });
      } else {
        // If editingId is not set, create a new record
        axios.post('http://localhost:5000/education', formData)
          .then(response => {
            // Add the new data to the educationData array
            setEducationData(prevData => [...prevData, response.data]);
            resetForm();
            alert('Data saved successfully!');
          })
          .catch(error => {
            console.error('Error saving data: ', error);
            alert('An error occurred while saving data.');
          });
      }
    }
  }

  function handleEditClick(id) {
    // Set the form fields with the data of the selected record
    const selectedData = educationData.find(item => item.id === id);
    setUserid(selectedData.user_id);
    setCourse(selectedData.course);
    setInstitutename(selectedData.institute_name);
    setUniversity(selectedData.university);
    setYearofpass(selectedData.year_of_pass);
    setPercentage(selectedData.percentage);
    setStatus(selectedData.status);
    setEditingId(id);
  }

  function handleDeleteClick(id) {
    // Confirm the deletion and then delete the record
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://localhost:5000/education/${id}`)
        .then(() => {
          // Remove the deleted data from the educationData array
          setEducationData(prevData =>
            prevData.filter(item => item.id !== id)
          );
          resetForm();
          alert('Data deleted successfully!');
        })
        .catch(error => {
          console.error('Error deleting data: ', error);
          alert('An error occurred while deleting data.');
        });
    }
  }

  function resetForm() {
    // Reset the form fields and editingId
    setUserid('');
    setCourse('');
    setInstitutename('');
    setUniversity('');
    setYearofpass('');
    setPercentage('');
    setStatus('select');
    setEditingId(null);
    setErrors({});
    setTouched({});
  }
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
                  
                </Modal.Footer>
              </Modal>

              <div className="table-responsive">
               
                <div className="table-responsive">
          
                  <thead>
               
            <tr>
              <th>User ID</th>
              <th>Course</th>
              <th>Institute Name</th>
              <th>University</th>
              <th>Year of Passing</th>
              <th>Percentage</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
        
       
          <tbody>
            {educationData.map(data => (
              <tr key={data.id}>
                <td>{data.user_id}</td>
                <td>{data.course}</td>
                <td>{data.institute_name}</td>
                <td>{data.university}</td>
                <td>{data.year_of_pass}</td>
                <td>{data.percentage}</td>
                <td>{data.status}</td>
                <td>
                  
             {/*    <Button onClick={handleSubmit}variant="primary" type="submit"> 
            update
          </Button>
          
                <Button variant="warning" onClick={() => handleEditClick(data.id)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteClick(data.id)}>Delete</Button>*/}
                </td> 
              </tr>
            ))}
          </tbody>
          
          <form>
         
            {educationData.map(data => (
              <div key={data.id}>
                <div></div>
            <label>User ID   : </label><strong> {data.user_id}</strong><h5>Course: {data.course} </h5>  
            
          </div>
          
            ))}
          </form>
          </div>
                   
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
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecurProfileDetails;
