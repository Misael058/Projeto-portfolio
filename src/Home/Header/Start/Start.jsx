import React from 'react'
import Header from './../Header'
import Conteudo from './../Conteudo/Conteudo'
import Footer from "./../Footer/Footer"



const Start = () => {
    return (
        <>
        <Header/>
        <section className='areaPrincipal'>
           <Conteudo/>
           </section>
       
        <Footer/>
       
        </>
      )
}

export default Start