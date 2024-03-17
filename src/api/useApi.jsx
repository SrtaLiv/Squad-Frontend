import { useState, useEffect } from 'react';

const useApi = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [error, setError] = useState(null);

  const handleResponse = async (response) => {
    if (!response.ok) {
      if (response.status === 401) {
        // Handle unauthorized response (e.g., logout user)
        setError('Unauthorized');
        localStorage.removeItem('authToken');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
      }
      throw new Error(error);
    }
    return response.json();
  };

  const fetchData = async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${authToken}`,
        },
      });
      return handleResponse(response);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token !== authToken) {
      setAuthToken(token);
    }
  }, [authToken]);

  return { fetchData, error };
};

export default useApi;
