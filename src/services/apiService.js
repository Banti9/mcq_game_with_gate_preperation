import axios from 'axios';

// Replace with your Raipido API endpoint
const API_URL = 'https://api.raipido.com/questions'; 

export const fetchQuestions = async (amount = 10) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        amount, // Number of questions
        // Add other parameters if required by the Raipido API
      },
      headers: {
        'Authorization': `Bearer YOUR_API_KEY_HERE`, // Replace with your API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};
