{/*const [educationalRecords, setEducationalRecords] = useState([]);

useEffect(() => {
  axios.get('http://192.168.1.140:5000/education')
    .then(response => {
      setEducationalRecords(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

<div>
  {educationalRecords.map(record => (
    <div key={record.id}>
      <p>Course: {record.course}</p>
      <p>Institute Name: {record.institute_name}</p>
      <p>University: {record.university}</p>
      {/* ... other fields *
    </div>
  ))}
</div>
const [selectedRecord, setSelectedRecord] = useState(null);
{educationalRecords.map(record => (
    <div key={record.id}>
      {/* ... display record fields *
      <button onClick={() => handleEdit(record)}>Edit</button>
      <button onClick={() => handleDelete(record.id)}>Delete</button>
    </div>
  ))}
  const handleEdit = (record) => {
    setSelectedRecord(record);
    setCourse(record.course);
    setInstitutename(record.institute_name);
    setUniversity(record.university);
    setYearofpass(record.year_of_pass);
    setPercentage(record.percentage);
    setStatus(record.status);
  };
  
  const handleDelete = (recordId) => {
    axios.delete(`http://192.168.1.140:5000/education/${recordId}`)
      .then(response => {
        // Update educationalRecords state after successful deletion
        setEducationalRecords(prevRecords => prevRecords.filter(record => record.id !== recordId));
        alert('Record deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting record:', error);
        alert('An error occurred while deleting the record.');
      });
  };*/}


  import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

function Step2() {
  // ... existing state and functions ...

  // State to track the list of educational records
  const [educationalRecords, setEducationalRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    // Fetch educational records from the API when the component mounts
    axios.get('http://192.168.1.140:5000/education')
      .then(response => {
        setEducationalRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setCourse(record.course);
    setInstitutename(record.institute_name);
    setUniversity(record.university);
    setYearofpass(record.year_of_pass);
    setPercentage(record.percentage);
    setStatus(record.status);
  };

  const handleDelete = (recordId) => {
    axios.delete(`http://192.168.1.140:5000/education/${recordId}`)
      .then(response => {
        setEducationalRecords(prevRecords => prevRecords.filter(record => record.id !== recordId));
        alert('Record deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting record:', error);
        alert('An error occurred while deleting the record.');
      });
  };

  return (
    <>
      <div>Step2</div>
      <div>
        {/* Display existing educational records */}
        <div>
          {educationalRecords.map(record => (
            <div key={record.id}>
              <p>Course: {record.course}</p>
              <p>Institute Name: {record.institute_name}</p>
              <p>University: {record.university}</p>
              <p>Year of Passing: {record.year_of_pass}</p>
              <p>Percentage: {record.percentage}</p>
              <p>Status: {record.status}</p>
              <button onClick={() => handleEdit(record)}>Edit</button>
              <button onClick={() => handleDelete(record.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>

        {/* Form for adding/editing records */}
        <Form onSubmit={handleSubmit}>
          {/* ... form fields ... */}
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Step2;

  