import axios from 'axios';
require('dotenv').config();


axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getHeroes = async () => {
  const apiUrl = `${axios.defaults.baseURL}`;
  try {
    const APIResponse = await axios.get(apiUrl);
    console.log(APIResponse.data);
    return APIResponse.data;
  } catch (error) {
    console.error('Erro na requisição: ', error);
    return []
  }
}