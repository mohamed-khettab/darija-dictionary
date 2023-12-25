import axios from 'axios';

const api = axios.create({
  baseURL: 'https://darija-dictionary-api.onrender.com/api',
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