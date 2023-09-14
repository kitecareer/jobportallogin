import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SkillForm = () => {
  const [formData, setFormData] = useState({
    skills: '',
    experience: '',
    status: '',
    skillVersion: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.skills) {
      newErrors.skills = 'Skills field is required.';
    }
    if (!formData.experience) {
      newErrors.experience = 'Experience field is required.';
    }
    if (!formData.status) {
      newErrors.status = 'Status field is required.';
    }
    if (!formData.skillVersion) {
      newErrors.skillVersion = 'Skill Version field is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // You can perform your submit logic here
      setSubmitted(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="skills">
        <Form.Label>Skills</Form.Label>
        <Form.Control
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
          isInvalid={!!errors.skills}
        />
        <Form.Control.Feedback type="invalid">
          {errors.skills}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="experience">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          isInvalid={!!errors.experience}
        />
        <Form.Control.Feedback type="invalid">
          {errors.experience}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select" // Use a select input for dropdown
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          isInvalid={!!errors.status}
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.status}
        </Form.Control.Feedback>
      </Form.Group>


      <Form.Group controlId="skillVersion">
        <Form.Label>Skill Version</Form.Label>
        <Form.Control
          type="text"
          name="skillVersion"
          value={formData.skillVersion}
          onChange={handleInputChange}
          isInvalid={!!errors.skillVersion}
        />
        <Form.Control.Feedback type="invalid">
          {errors.skillVersion}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {submitted && <p>Form submitted successfully!</p>}
    </Form>
  );
};

export default SkillForm;
