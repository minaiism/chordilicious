import { useState } from 'react';
import constate from 'constate';

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  return { user, setUser};
};

export const [UserInfoProvider, useUserContext] = constate(useUserInfo);


