import React from 'react'
import Header from './../Header'
import Footer from  './../Footer/Footer'
import Perfil from './Img/147666566 (1).jpg'
import './sobre.css'
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { SiCss3 } from "react-icons/si";






const Sobre = () => {
  return (
    <>
    <Header/>
    <section >
    <div className='biografia'> 
      <img src={Perfil} alt="" width=" 300px" height="300px" />
      <div className="sobreEu">
           <h4>Sobre</h4>
           <b >Ola, Sou Misael <br />
            sou estudante Front-end. Meu obetivo é se tornar um profissional na area de T.I e trabalhar em grandes empresas   
            em qualque lugar do mundo. <br /> Costumo gostar de trabalhar em grupos aprender com pessoas da minha area e outras ,<br />
             sempre ávido em  absorver o maximo possivel de conhecimento e experiencia. <br /> Acredito que o aprendizado só e adquirido depois de muita pratica, nada irá cair do céu e nada será herdado, <br /> ao contrário, será conquistado.
           
           </b>
       </div>

       </div>
     
       <div className="competencias">
        <h3>Competencias:</h3>
      <i><ImHtmlFive /></i> 
      <i> <SiJavascript /></i>
      <i> <FaReact /></i>
      <i> <SiPhp /></i>
       <i><SiCss3 /></i>




       </div>

    </section>
   
   




     <Footer/>
    
    </>
  )
}

export default Sobre