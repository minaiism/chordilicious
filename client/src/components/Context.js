import { useState } from 'react';
import constate from 'constate';

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  return { user, setUser, error, setError };
};

export const [UserInfoProvider, useUserContext] = constate(useUserInfo);


