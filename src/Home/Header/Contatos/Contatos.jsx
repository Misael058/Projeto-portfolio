import React from 'react'
import Header from '../Header'
import Footer from  '../Footer/Footer'
import './contato.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"




const Contatos = () => {
  return (
    <>
    <Header/>
    <section className='mainContatos'>
      <h3 className='titulo'>Meus contatos</h3>
      <div className="contatos">
        <h4>Entre em contato</h4>
        <b>Entre em contato para que possamos conversar melhor sobre</b>
       
      </div>
      <div className="areaIcones">

    <Link  to="https://wa.me/5571981432615?text=Ola!%20vi%20seu%20portfolio%20e%20quero%20conversar%20mais%20sobre%20seu%20trabalho">    <FaWhatsapp /></Link>
    <Link to="https://github.com/Misael058" >     <FaGithub /></Link>
    <Link to="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act" >  <SiGmail /></Link>
    <Link  to="https:/linkedin.com/in/misael-silva-a8976a29b">  <FaLinkedin /></Link>
    
      

      </div>
    </section>

    <Footer/>
    
    </>
  )
}

export default Contatos