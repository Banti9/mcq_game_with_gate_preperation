import React from 'react';

const Option = ({ option, onSelect }) => (
  <button onClick={() => onSelect(option)}>{option}</button>
);

export default Option;

// const https = require('https'); // Corrected to use 'https'

// const options = {
//   method: 'GET',
//   hostname: 'djangoapi.p.rapidapi.com',
//   port: null,
//   path: '/',
//   headers: {
//     'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Use environment variable for API key
//     'x-rapidapi-host': 'djangoapi.p.rapidapi.com'
//   }
// };

// // Function to fetch data from API
// const fetchData = () => {
//   const req = https.request(options, (res) => {
//     const chunks = [];

//     res.on('data', (chunk) => {
//       chunks.push(chunk);
//     });

//     res.on('end', () => {
//       const body = Buffer.concat(chunks);
//       console.log(body.toString());
//     });
//   });

//   req.on('error', (e) => {
//     console.error(`Problem with request: ${e.message}`);
//   });

//   req.end();
// };

// // Call the function to fetch data
// fetchData();
