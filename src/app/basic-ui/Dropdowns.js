import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function JobView() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);

  useEffect(() => {
    Axios.get('https://kitecareer.com/jobapp/jobs')
      .then((response) => {
        if (response.status === 200 && response.data && response.data.data && response.data.data["Job List"]) {
          const sortedJobs = response.data.data["Job List"].sort((a, b) =>
            new Date(b.last_updated) - new Date(a.last_updated)
          );
          setJobs(sortedJobs);
        } else {
          setError('Invalid response data');
        }
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
        setError('Error fetching job data. Please try again.');
      });
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Job Details</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Status</TableCell>
                  {/* Add more table headers as needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentJobs.map((job) => (
                  <TableRow key={job.job_id}>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.description || 'No description available'}</TableCell>
                    <TableCell>{job.company_name}</TableCell>
                    <TableCell>{job.exp_from}Year-{job.exp_to}Year</TableCell>
                    <TableCell>{job.skills}</TableCell>
                    <TableCell>{job.salary}</TableCell>
                    <TableCell>{job.locations}</TableCell>
                    <TableCell>{job.contact}</TableCell>
                    <TableCell>{job.status}</TableCell>
                    {/* Add more table data cells as needed */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="pagination">
            {Array.from({ length: Math.ceil(jobs.length / jobsPerPage) }, (_, i) => (
              <Button key={i} variant="contained" onClick={() => paginate(i + 1)}>
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default JobView;