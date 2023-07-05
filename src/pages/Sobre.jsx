import Header from "../components/Header"
import styles from '../styles/pages/sobre.module.css'
import sobre from '../assets/sobre.jpg'
import sobreImage from '../assets/sobre2.jpg'




const Sobre = () => {
  return (
    <>
      <Header 
       image={sobre} 
      />
      <div className={styles.sobreConteiner}>
        <img className={styles.sobreImage} src={sobreImage} />
      
      </div>
    
    </>
  )
}

export default Sobre
