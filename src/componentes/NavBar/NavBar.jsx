import './NavBar.css'
import { useState } from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {

    const logo = "/img/logo-00.png"

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to="/" className='logo'>
                    <img src={logo} alt='logo' />
                    <div className='logo-texto'>
                        <h2>excel.arq</h2>
                        <h3>Excel aplicado a la Arquitectura</h3>
                    </div>
                </Link>

                <ul className={click ? "nav-menu active" : "nav-menu"} style={{ listStyle: 'none' }}>
                    <li className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="talleres" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Talleres</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="detrasde" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Detras de...</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contactame" spy={true} smooth={true} offset={250} duration={500} onClick={closeMenu}>Contactame</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar