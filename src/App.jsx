import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Cart from './componentes/Cart/Cart'
import Inicio from './componentes/Inicio/Inicio'
import Talleres from './componentes/Talleres/Talleres'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import DetrasDe from './componentes/DetrasDe/DetrasDe'
import Contactame from './componentes/Contactame/Contactame'
import Footer from './componentes/Footer/Footer'
import { CarritoProvider } from './Context/CarritoContext'

const App = () => {
  return (
    <>
      <CarritoProvider>
        <div id='/'>
          <NavBar />
        </div>
        <Inicio />
        <Talleres />
        <ItemListContainer />
        <DetrasDe />
        <Contactame />
        <Cart />
        <Footer />
      </CarritoProvider>
    </>
  )
}

export default App
