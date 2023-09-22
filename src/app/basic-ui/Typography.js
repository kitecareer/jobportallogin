import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function JobDetailsById({ job_id }) {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get(`https://kitecareer.com/jobapp/jobs/${job_id}`)
      .then((response) => {
        if (response.status === 200 && response.data && response.data.data["Job Details"]) {
          setJob(response.data.data["Job Details"]);
        } else {
          setError('Job details not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching job details:', error);
        setError('Error fetching job details. Please try again.');
      });
  }, [job_id]);

  return (
    <div>
      <h1>Job Details</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : job ? (
        
        <div>
          
          <h2>{job.title}</h2>
          <p>Description: {job.description || 'No description available'}</p>
          <p>Salary: {job.salary}</p>
          <p>Location: {job.locations}</p>
          {/* Add more job details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default JobDetailsById;