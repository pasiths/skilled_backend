import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Jwt = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get token from cookie using js-cookie
    const tokenFromCookie = Cookies.get('token');
    setToken(tokenFromCookie);
  }, []);

  return (
    <div>
      <h1>Your Token: {token}</h1>
    </div>
  );
};

export default Jwt;
