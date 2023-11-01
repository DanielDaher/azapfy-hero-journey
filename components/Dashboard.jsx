import HeroCard from '@/components/HeroCard';
import Loading from './Loading';
import styles from '@/styles/Home.module.css';
import { HeroesContext } from "@/context/HeroesContext";
import { useEffect, useState, useContext } from "react";

export default function Dashboard() {
  const { heroesData, setHeroesData, fetchData } = useContext(HeroesContext);

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
    </div>
  );

}