import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Contatos from './Home/Header/Contatos/Contatos';
import Sobre from './Home/Header/Sobre/Sobre';
import Start from './Home/Header/Start/Start';
import Projetos from './Home/Header/Projetos/Projetos';
import Error404 from './Home/Header/Pagina 404/Error404';

const Rotas = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {<Start/>}  ></Route>
        <Route path='/contatos' element= {<Contatos/>}  ></Route>
        <Route path='/sobre' element= {<Sobre/>}  ></Route>
        <Route path='/projetos' element= {<Projetos/>}  ></Route>
        <Route path="*" element= {<Error404/>}  ></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default Rotas;