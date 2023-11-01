import Loading from './Loading';
import BattleModal from './BattleModal';
import HeroCard from '@/components/HeroCard';
import styles from '@/styles/Home.module.css';
import { HeroesContext } from "@/context/HeroesContext";
import { useEffect, useState, useContext } from "react";

export default function Dashboard() {
  const { heroesData, selectedHeroes, fetchData } = useContext(HeroesContext);

  useEffect(() => {
    if (!heroesData.length) {
      fetchData();
    }
  }, []);

  const RenderHeroCards = () => {
    return (
      <div className={styles.cardBoard}>
        { heroesData.map(( hero ) => <HeroCard key={ hero.id } heroData={ hero } />) }
      </div>
      
    )
  }

  return (
    <div>
      { heroesData.length ? <RenderHeroCards /> : <Loading /> }
      { selectedHeroes.length === 2 ? <BattleModal /> : '' }
    </div>
  );

}