  import { useState, useEffect } from "react"
  import Axios from "axios"
  import styles from '../styles/components/repor.module.css'
  
  
  
  function Repor (){
      const [repositorios, setRepositorios] = useState([])
      const url = "https://api.github.com/users/magaspe/repos"
  
      useEffect(() => {
          async function getRepor() {
              const response = await Axios.get(url)
              setRepositorios(response.data)
              console.log(response.data)  
          } 
          getRepor()
          }, [])
  
      return(
  
          <div className={styles.cards}>
          {repositorios.map((repositorio) =>{
              return(
                <div className={styles.repo}>
                  <h3>{repositorio.name}</h3>
                  <p>{repositorio.language}</p>
                  <a href={repositorio.html_url}>Clique</a>
                </div> 
                )
  
          })} 
  
      </div>
  
  )
  }
  
  export default Repor