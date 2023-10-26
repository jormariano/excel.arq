import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Inicio from './componentes/Inicio/Inicio'
import Talleres from './componentes/Talleres/Talleres'

const App = () => {
  return (
    <>
      <div className='background-img'>
        <NavBar />
        <Inicio />
      </div>
      <Talleres />
    </>
  )
}

export default App
