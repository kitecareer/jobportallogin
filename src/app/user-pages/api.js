// api.js (a separate module)
import axios from 'axios';

// Function to make an authenticated API request
export const makeAuthenticatedRequest = (url, requestData) => {
  const jwtToken = localStorage.getItem('jwtToken'); // Retrieve the token from local storage

  if (!jwtToken) {
    // Handle the case where the token is not available (e.g., user not logged in)
    return Promise.reject(new Error('JWT token is missing'));
  }

  // Make an authenticated API request using the token
  return axios.post("https://kitecareer.com/jobapp/login", requestData, {
    headers: {
      token: jwtToken, // Use 'token' as the header key
    },
  });
};
