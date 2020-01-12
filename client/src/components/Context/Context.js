import { useState } from 'react';
import createUseContext from 'constate';

const useUser = () => {
  const [user, setUser] = useState(null);
  return { user, setUser };
};

export const useUserContext = createUseContext(useUser);