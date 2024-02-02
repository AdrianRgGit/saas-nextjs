// useFetchData.js
import { useState, useEffect } from 'react';
import { fetchData } from '@/service/fetchUserData';

export const useFetchData = () => {
 const [data, setData] = useState<any[]>();

 useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      setData(res);
    };
    getData();
 }, []);

 return data;
};
