import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import HeroesProvider from '@/context/HeroesContext';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <HeroesProvider>
      <Head>
        <title>Azapfy Hero Journey</title>
      </Head>
      <main className={`${styles.main}`}> 
        <Dashboard />
      </main>
    </HeroesProvider>
  )
}
