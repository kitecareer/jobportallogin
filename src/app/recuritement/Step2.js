import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import axios from 'axios';
import { makeAuthenticatedRequest } from '../user-pages/api'; // Import the authentication function

function Step2() {
  const [user_id, setUserid] = useState('');
  const [course, setCourse] = useState('');
  const [institute_name, setInstitutename] = useState('');
  const [university, setUniversity] = useState('');
  const [year_of_pass, setYearofpass] = useState('');
  const [percentage, setPercentage] = useState('');
  const [status, setStatus] = useState('select');

  const [educationData, setEducationData] = useState([]);
  const [edu_id, setedu_id] = useState(null);

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch education data from the API when the component mounts
    const fetchData = async () => {
      try {
        // Make an authenticated API request using the JWT token
        const apiResponse = await makeAuthenticatedRequest('http://kitecareer.com/jobapp/education', {
          // Add any request data if needed
        });

        // Set the education data in the component state
        setEducationData(apiResponse.data);
      } catch (error) {
        console.error('Error fetching data from the API: ', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
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

      if (edu_id !== null) {
        // If editingId is set, update the existing record
        axios.put(`http://kitecareer.com/jobapp/education`, formData)
          .then(response => {
            // Update the educationData array with the edited data
            setEducationData(prevData =>
              prevData.map(item =>
                item.id === edu_id ? { ...item, ...formData } : item
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
        axios.post(`http://kitecareer.com/jobapp/education`, formData)
          .then(response => {
            console.log(response.data);
            // Update the educationData array with the new data
            setEducationData(prevData => [...prevData, response.data]);
            resetForm();
            alert('Data saved successfully!');
          })
          .catch(error => {
            console.error('Error:', error);
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
    setedu_id(id);
  }

  function handleDeleteClick(id) {
    // Confirm the deletion and then delete the record
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://kitecareer.com/jobapp/education/${id}`)
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
    setedu_id(null);
    setErrors({});
    setTouched({});
  }

  return (
   <>
      <div>Step2</div>
      <div>
      <div>
            {educationData.map(data => (
              <div key={data.id}>
                
                  <Button variant="warning" onClick={() => handleEditClick(data.id)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteClick(data.id)}>Delete</Button>
               
              </div>
            ))}
          </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>user_id</Form.Label>
            <Form.Control
              placeholder="user id "
              value={user_id}
              onChange={e => setUserid(e.target.value)} required
            />
            {errors.course && <div className="error">{errors.course}</div>}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Course</Form.Label>
            <Form.Control
              placeholder="Course Name Ex:BCA"
              value={course}
              onChange={e => setCourse(e.target.value)} required
            />
            {errors.course && <div className="error">{errors.course}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Institute Name</Form.Label>
            <Form.Control
              placeholder="Institute Name"
              value={institute_name}
              onChange={e => setInstitutename(e.target.value)} required
            />
            {errors.institute_name && <div className="error">{errors.institute_name}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>University</Form.Label>
            <Form.Control
              placeholder="University"
              value={university}
              onChange={e => setUniversity(e.target.value)}  required
            />
            {errors.university && <div className="error">{errors.university}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Year Of Passing</Form.Label><br/>
            <Form.Control
              placeholder="Year Of Passing"
              value={year_of_pass}
              onChange={e => setYearofpass(e.target.value)} required
            />
            {errors.year_of_pass && <div className="error">{errors.year_of_pass}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Percentage</Form.Label><br/>
            <Form.Control
              placeholder="Percentage"
              value={percentage}
              onChange={e => setPercentage(e.target.value)} required
            />
            {errors.percentage && <div className="error">{errors.percentage}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Status</Form.Label><br/>
            <select value={status} onChange={e => setStatus(e.target.value)} required>
              <option value="select">Select</option>
              <option value="Active">Active</option>
              <option value="inActive">Inactive</option>
            </select>
            {errors.status && <div className="error">{errors.status}</div>}
          </Form.Group>

          <Button onClick={handleSubmit}variant="primary" type="submit">
            Save
          </Button>
        </Form>

         {/* <Button variant="primary" type="submit">
            {editingId !== null ? "Update" : "Save"}
          </Button>*/}
   

 
          
          <tbody>
            {educationData.map(data => (
              <tr key={data.id}>
                
                <td>
                  <Button variant="warning" onClick={() => handleEditClick(data.id)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteClick(data.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
    
      </div>
    </>
  )
}

export default Step2;