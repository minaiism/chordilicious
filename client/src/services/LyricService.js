import ApiClient from './ApiClient';

export const search = async (phrase) => {
  let res = await ApiClient.get('/lyrics/search', { params: { phrase } });
  return res.data;
};
