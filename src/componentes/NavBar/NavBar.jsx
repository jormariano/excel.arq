import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useState } from 'react'
import { Link } from 'react-scroll'


const NavBar = () => {

    const logo = "/img/logo-00.png"

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    return (
        <header id="/">

            <Link to="/" className='logo'>
                <img src={logo} alt='logo' />
                <div className='logo-texto'>
                    <h2>excel.arq</h2>
                    <h3>Excel aplicado a la Arquitectura</h3>
                </div>
            </Link>
            <div className="nav-cart-container">
                <nav>
                    <ul>
                        <li className='nav-item'>
                            <Link to="/" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Inicio</Link>
                        </li>
                        <li className='nav-item'>
                            <div className="dropdown">
                                <Link to="talleres" spy={true} smooth={true} offset={-134} duration={500} onClick={closeMenu}>Talleres</Link>
                                <div className="dropdown-content">
                                    <Link to="/item/1">Basico</Link>
                                    <Link to="/item/2">Intermedio</Link>
                                    <Link to="/item/3">Avanzado</Link>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <Link to="detrasde" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Detras de...</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="contactame" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Contactame</Link>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}

export default NavBar