import { useQuery } from 'react-query';
import axios from 'axios';

const fetchDestinations = async () => {
  const response = await axios.get('http://localhost:5000/api/destinations');
  return response.data;
};

export const UseDestination = () => {
  return useQuery('destinations', fetchDestinations);
};
