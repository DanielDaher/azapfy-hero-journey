import { createContext, useState } from 'react';
import { getHeroes } from '@/services/api';

export const HeroesContext = createContext();

export default function HeroesProvider(props) {
  const [ heroesData, setHeroesData ] = useState([]);
  
  const fetchData = async () => {
    try {
      const data = await getHeroes();
      setHeroesData(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setHeroesData([]);
    }
  }

  return (
    <HeroesContext.Provider value={{ heroesData, setHeroesData, fetchData }}>
      { props.children }
    </HeroesContext.Provider>
  );
}