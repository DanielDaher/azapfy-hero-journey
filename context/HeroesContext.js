import { createContext, useState } from 'react';
import { getHeroes } from '@/services/api';

export const HeroesContext = createContext();

export default function HeroesProvider(props) {
  const [ heroesData, setHeroesData ] = useState([]);
  const [ selectedHeroes, setSelectedHeroes ] = useState([]);
  
  const fetchData = async () => {
    try {
      const data = await getHeroes();
      setHeroesData(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setHeroesData([]);
    }
  }

  const selectNewHero = (heroInformation) => {
    if (selectedHeroes.length < 2) {
      const sameCharacter = selectedHeroes[0] === heroInformation;
      if (sameCharacter) return setSelectedHeroes([]);
      const heroes = [ ...selectedHeroes, heroInformation ]
      setSelectedHeroes(heroes);
    }
  }

  return (
    <HeroesContext.Provider value={
      { 
        heroesData, selectedHeroes, setSelectedHeroes, selectNewHero, fetchData 
      }}
    >
      { props.children }
    </HeroesContext.Provider>
  );
}
