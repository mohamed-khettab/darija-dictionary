import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const fetchWord = async (word, setWordData) => {
  try {
    const response = await api.get(`/words/${word}`);
    setWordData(response.data);
  } catch (error) {
    console.error(`Error fetching word data for "${word}":`, error.response?.data || error.message);
    throw error;
  }
};

export { fetchWord };