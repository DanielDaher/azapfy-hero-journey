import Loading from './Loading';
import SearchInput from './SearchInput';
import BattleModal from './BattleModal';
import Alert from '@mui/material/Alert';
import HeroCard from '@/components/HeroCard';
import styles from '@/styles/Home.module.css';
import Snackbar from '@mui/material/Snackbar';
import { HeroesContext } from "@/context/HeroesContext";
import { useEffect, useState, useContext } from "react";
const TUTORIAL_MESSAGE = "Selecione dois personagens e veja quem vence!";
const NEXT_STEP_MESSAGE = "Selecione mais um personagem";

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

  const AlertMessageType = () => {
    const tutorialMessage = selectedHeroes.length === 1 ? NEXT_STEP_MESSAGE : TUTORIAL_MESSAGE;
    const errorMessage = 'Nenhum herói encontrado com este nome';
    if (!currentHeroes.length) return;
    return (
      <Snackbar
        open={selectedHeroes.length < 2}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Alert 
          variant='outlined'
          severity={ currentHeroes.length ? 'info' : 'error'}
        >
          {  currentHeroes.length ? tutorialMessage : errorMessage}
        </Alert>
      </Snackbar>
    )
  }

  return (
    <div>
      { AlertMessageType() }
      { heroesData.length ? <SearchInput searchHero={ searchHero } /> : '' }
      { heroesData.length ? <RenderHeroCards /> : <Loading /> }
      { selectedHeroes.length === 2 ? <BattleModal /> : '' }
    </div>
  );
}