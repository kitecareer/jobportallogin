import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import {
  
  Chip,
  Grid,
 
  Paper,
  
  Typography,
 
} from "@material-ui/core";
import DescriptionIcon from '@mui/icons-material/Description';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function JobView() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get('https://kitecareer.com/jobapp/jobs')
      .then((response) => {
        if (response.status === 200 && response.data && response.data.data["Job List"]) {
          setJobs(response.data.data["Job List"]); // Update to access "data" field and "Job List" array
        } else {
          setError('Invalid response data');
        }
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
        setError('Error fetching job data. Please try again.');
      });
  }, []);

  return (
    
    
      <div className="card">
        <div className="card-body">
       <div>
      <h1>Job Details</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {jobs.map((job) => (
        <Paper>
    <Grid container>
      <Grid container item xs={30} spacing={2} direction="column" >
      <Grid item>
      {job.job_id}
         
        </Grid>
        <Grid item>
          <Typography variant="h5">{job.title}</Typography>
        </Grid>
        <Grid item>
        {job.company_name}
         
        </Grid>
        <Grid item  ><DescriptionIcon />Job Description : {job.description} &nbsp;&nbsp;&nbsp;&nbsp;  Salary : &#8377; {job.salary} per Year </Grid>
        <Grid item><PaymentIcon/>     Experience  :{job.exp_from}
            -  {job.exp_to}years &nbsp;   <WorkIcon/>Skills:{job.skills}  &nbsp;   <LocationOnIcon/>  Location:  {job.locations}</Grid>
        <Grid item><ContactMailIcon/> Contact: {job.contact}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Button type='submit' to="/user-pages/register-1"><a  to="/user-pages/register-1">Apply Now</a></Button></Grid>  
       
      </Grid>
      </Grid>
    
      <div className="col-8 grid-margin stretch-card">
        
      </div>
      </Paper>
      
     
         ))}
       
         </ul>
          
      )}
      </div>
      </div>
      </div>
     
    
  );
}

export default JobView;
