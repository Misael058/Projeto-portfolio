import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import './projetos.css'
import { useState } from 'react'
import Card from '../Card/Card'



const Projetos = () => {

  const [repositorio , setRepositorio ] = useState([])
  useEffect(() => {
  const buscaRepo = async () => {
    const resposta = await fetch ('https://api.github.com/users/Misael058/repos')
    const resultado  = await resposta.json()
    setRepositorio(resultado)
  }
     buscaRepo()
    
  },[]) //colocando um conchete pra executar essa acão apenas uma vez


  return (
    <>
    <Header/>
    <h2 className='titulo'>projetos</h2>
     {repositorio.length > 0 ? (
       <section className='mainProjetos'>
        {repositorio.map ((repo) => (
           <Card
           key={repo.id}
           name={repo.name}
           description={repo.description}
           html_url={repo.html_url}
         />
          
        ))}
      
      </section>
     ): (
        <b>O repositorio esta carregando...</b>
     )}
  
    <Footer/>
    
    </>
  )
}

export default Projetos