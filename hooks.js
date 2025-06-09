import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};

export default useCustomFetch;
