import React from 'react'
import { Form, Button, Table } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';

const [educationData, setEducationData] = useState([]);
const [user_id, setUserid] = useState('');
const [course, setCourse] = useState('');
const [institute_name, setInstitutename] = useState('');
const [university, setUniversity] = useState('');
const [year_of_pass, setYearofpass] = useState('');
const [percentage, setPercentage] = useState('');
const [status, setStatus] = useState('select');


const [editingId, setEditingId] = useState(null);

const [touched, setTouched] = useState({});
const [errors, setErrors] = useState({});
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



      if (editingId !== null) {
        // If editingId is set, update the existing record
        axios.put(`http://localhost:5000/education/${editingId}`)
          .then(response => {
            // Update the educationData array with the edited data
            setEducationData(prevData =>
              prevData.map(item =>
                item.id === editingId ? { ...item,  } : item
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
        axios.post('http://localhost:5000/education')
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

function view() {
  return (
    <div>
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
                  <Button variant="warning" onClick={() => handleEditClick(data.id)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteClick(data.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
    </div>
  )
}

export default view;