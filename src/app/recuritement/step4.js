import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";

const CertificationForm = () => {
  const [certificate, setCertificate] = useState({
    cert_title: "",
    cert_proof: "",
    status: "",
  });
  const [certificateProofs, setCertificateProofs] = useState([""]); // Array to hold certificate proof fields
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate({
      ...certificate,
      [name]: value,
    });
  };

  const addCertificateProofField = () => {
    setCertificateProofs([...certificateProofs, ""]);
  };

  const handleCertificateProofChange = (index, value) => {
    const updatedProofs = [...certificateProofs];
    updatedProofs[index] = value;
    setCertificateProofs(updatedProofs);
  };


  const validateForm = () => {
    const newErrors = {};

    if (!certificate.cert_title.trim()) {
      newErrors.cert_title = "Certificate title is required";
    }

    if (!certificate.cert_proof.trim()) {
      newErrors.cert_proof = "Certificate proof is required";
    }

    if (!certificate.status) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form data to the backend API
      axios.post("/api/submit-certification", certificate)
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          setSubmitted(true);
        })
        .catch((error) => {
          console.error("Submission error:", error);
        });

      // Reset the form fields and errors
      setCertificate({
        cert_title: "",
        cert_proof: "",
        status: "",
      });
      setErrors({});
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {submitted && (
        <Alert variant="success">
          Form submitted successfully!
        </Alert>
      )}

      <Form.Group controlId="cert_title">
        <Form.Label>Certificate Title</Form.Label>
        <Form.Control
          type="text"
          name="cert_title"
          value={certificate.cert_title}
          onChange={handleChange}
          isInvalid={!!errors.cert_title}
        />
        <Form.Control.Feedback type="invalid">
          {errors.cert_title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="cert_proof">
        <Form.Label>Certificate Proof</Form.Label>
        {certificateProofs.map((proof, index) => (
          <div key={index}>
            <Form.Control
              type="file"
              value={proof}
              onChange={(e) => handleCertificateProofChange(index, e.target.value)}
              isInvalid={!!errors.cert_proof}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cert_proof}
            </Form.Control.Feedback>
          </div>
        ))}
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={certificate.status}
          onChange={handleChange}
          isInvalid={!!errors.status}
        >
          <option value="">Select Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.status}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="secondary" onClick={addCertificateProofField}>
          Add New Field
        </Button>

        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default CertificationForm;
