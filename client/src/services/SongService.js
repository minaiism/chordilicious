import ApiClient from './ApiClient';

export const search = async (phrase) => {
  let res = await ApiClient.get('/songs/search', { params: { phrase } });
  return res.data;
};