import Header from "../components/Header"
import Repor from "../components/Repor"
import portfolio from '../assets/portfolio.jpg'
import styles from '../styles/pages/portfolio.module.css'

const Portfolio = () => {
  return (
    <>
      <Header 
        image={portfolio} 
      />
      <div className={styles.portConteiner}> 
          <h1>Meus Projetos no Github</h1>
          <Repor />
     </div>
          
      {/* <div>
        <Repor />
      </div>
       */}
    </>
  )
}

export default Portfolio
