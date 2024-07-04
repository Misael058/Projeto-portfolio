import "./conteudo.css"
import Livro from "./img/book-closed-svgrepo-com.svg"
import {Link} from "react-router-dom"





const Conteudo = () => {

 
  return (
    <>
        <main className="areaMain">
            <div className='apresentacao'>
                <h3>Ola, sou <br/>
                <span>Misal </span> <br/>
                Estudante Front-End
               
                
                </h3>
                
                <Link to='/sobre' > <button>Saiba mais </button></Link> 

            </div>

            <figure className='imgMain'>
                <img src={Livro} alt="" />
            


            </figure>
       

        </main>
    
    </>
  
  )
}

export default Conteudo