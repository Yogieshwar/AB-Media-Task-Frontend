import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPackages = async () => {
  const res = await axios.get('http://localhost:5000/api/packages');
  return res.data;
};

export const usePackages = () => {
  return useQuery('packages', fetchPackages);
};
