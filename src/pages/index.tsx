import { useEffect } from 'react';
import { HomeContainer } from '../styles/homeStyles';

import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences'

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  },[])

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
      </main>
    </HomeContainer>
  );
}
