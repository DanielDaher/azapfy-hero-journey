import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://homologacao3.azapfy.com.br/api/ps/metahumans'; // instalar dotenv depois

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