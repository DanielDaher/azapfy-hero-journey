import HeroCard from '@/components/HeroCard'
import { HeroesContext } from "@/context/HeroesContext";
import { useEffect, useState, useContext } from "react";

export default function Dashboard() {
  const { heroesData, setHeroesData, fetchData } = useContext(HeroesContext);

  useEffect(() => {
    if (!heroesData.length) {
      fetchData();
    }
  }, []);

  return (
    <>
      <HeroCard />
    </>
  );

}