import { useState } from 'react';
import constate from 'constate';

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  return { user, setUser, loading, setLoading, error, setError };
};

export const [UserInfoProvider, useUserContext] = constate(useUserInfo);


