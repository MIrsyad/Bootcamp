import {useEffect, useState} from 'react';

export default function useGetData(url) {
  const [response, setResponse] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const axios = require('axios');

  async function getData() {
    try {
      await axios
        .get(url)
        .then((res) => {
          setResponse(res.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setErr(error);
    }
  }

  useEffect(() => {
    getData();
    console.log(response);
  }, [url]);
  return [response, err, isLoading];
}
