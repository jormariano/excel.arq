import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Inicio from './componentes/Inicio/Inicio'
import Talleres from './componentes/Talleres/Talleres'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import DetrasDe from './componentes/DetrasDe/DetrasDe'
import Contactame from './componentes/Contactame/Contactame'
import Footer from './componentes/Footer/Footer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div id="/" className='background-img'>
          <NavBar />
          <Inicio />
        </div>
        <Routes>
          <Route path="/" element={
            <div>
              <Talleres />
              <ItemListContainer />
              <DetrasDe />
              <Contactame />
            </div>
          } />
          <Route path="/cart" element={<ItemDetailContainer />} />
          <Route path="*" element={<div className='en-construccion'><h2>Este sitio no existe. Vuelve al</h2> <Link to='/'><h2>Inicio</h2></Link></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
