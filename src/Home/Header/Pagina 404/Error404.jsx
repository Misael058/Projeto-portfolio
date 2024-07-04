import React from 'react'
import Header from '../Header'
import Footer from '../Footer/Footer'
import "./error.css"

const Error404 = () => {
  return (
    <>
     <Header/>
        <section>
            <h2>erro pagina!!!</h2>
            <div>
                <strong>Erro 404!</strong><br />
            <h3>pagina não encontrada!!!</h3>

            </div>
        </section>
        <Footer/>
    
      
    </>
  )
}

export default Error404
