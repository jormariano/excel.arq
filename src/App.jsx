import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Inicio from './componentes/Inicio/Inicio'
import Talleres from './componentes/Talleres/Talleres'
import DetrasDe from './componentes/DetrasDe/DetrasDe'
import Contactame from './componentes/Contactame/Contactame'
import Footer from './componentes/Footer/Footer'

const App = () => {
  return (
    <>
      <div id="/" className='background-img'>
        <NavBar />
        <Inicio />
      </div>
      <Talleres />
      <DetrasDe />
      <Contactame />
      <Footer />
    </>
  )
}

export default App
