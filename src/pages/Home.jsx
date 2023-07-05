import Header from "../components/Header"

import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'

import home from '../assets/home.jpg'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        image={home} 
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#9c68ac" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, conhecimentos e experiências. </p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#9c68ac" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação. </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#9c68ac" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Entre em contato comigo. Seja para entrevistas de emprego ou para trocarmos ideias sobre o códigos. </p>
        </div>
      </div>
      
    </>
  )
}

export default Home