import React from 'react'
import Marca from '../../img/marcaPorfolio.svg'
import './header.css'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <>
    <header className="cabecalho">

     <Link to="/"> <img src={Marca} alt="logo Marca do site " title='Ola, Bem vindo ao meu Site-Portfolio!!' /></Link>

      <nav >

       <Link to="/" >Home</Link>
        <Link to="/sobre" >Sobre</Link >
        <Link to="/contatos" >Contatos</Link >
        <Link to="/projetos">Projetos</Link >
        </nav>
    </header>


      
    </>
  )
}

export default Header
