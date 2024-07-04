import React from 'react'
import './card.css'
import { FaCircleArrowRight } from "react-icons/fa6";
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

import { SiCss3 } from "react-icons/si";
import { Link } from 'react-router-dom';





const Card = ({name, description, html_url}) => {
  return (
    <>
        <section className='mainCard'>
            <h3 className='tituloCard'>{name}</h3>
            <b  className='descricao' >{description}</b>
            <div className="footerCard">
                <div className="icones">
                <i><ImHtmlFive /></i> 
                <i> <SiJavascript /></i>
                <i> <FaReact /></i>
              
                <i><SiCss3 /></i>


                </div>
                <Link to={html_url} className='arrow'>
                <FaCircleArrowRight />
            </Link>
            </div>
           

        </section>


    </>
  )
}

export default Card