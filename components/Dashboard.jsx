import Loading from './Loading';
import BattleModal from './BattleModal';
import HeroCard from '@/components/HeroCard';
import styles from '@/styles/Home.module.css';
import { HeroesContext } from "@/context/HeroesContext";
import { useEffect, useState, useContext } from "react";
import SearchInput from './SearchInput';

export default function Dashboard() {
  const { heroesData, selectedHeroes, fetchData } = useContext(HeroesContext);
  const [ currentHeroes, setCurrentHeroes ] = useState([]);

  useEffect(() => {
    if (!heroesData.length) {
      fetchData();
    }
    if (heroesData.length) {
      setCurrentHeroes([ ...heroesData ]);
    }
  }, [heroesData]);

  const searchHero = (inputValue) => {
    if (inputValue === '') {
      return setCurrentHeroes([ ...heroesData ]);
    }
    const filteredHeroes = heroesData.filter(({ name }) => name.toUpperCase().includes(inputValue));
    setCurrentHeroes(filteredHeroes);
  }

  const RenderHeroCards = () => {
    return (
      <div className={styles.cardBoard}>
        { currentHeroes.map(( hero ) => <HeroCard key={ hero.id } heroData={ hero } />) }
      </div>
      
    )
  }

  return (
    <div>
      {  heroesData.length ? <SearchInput searchHero={ searchHero } /> : '' }
      { heroesData.length ? <RenderHeroCards /> : <Loading /> }
      { selectedHeroes.length === 2 ? <BattleModal /> : '' }
    </div>
  );
}