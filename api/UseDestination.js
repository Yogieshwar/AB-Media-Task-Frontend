import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDestinations = async () => {
  const response = await axios.get('http://localhost:5000/api/destinations');
  return response.data;
};

export const UseDestination = () => {
  return useQuery({
  queryKey: ['destination'],
  queryFn: fetchDestinations,})
};
