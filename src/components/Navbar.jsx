import "../main.css";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='navbar'>
            <Link to="/" className="logo"><h1>Toronja Shop</h1></Link>

            {/* Botón hamburguesa */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* Menú principal */}
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li><Link className="menu-link" to="/" onClick={closeMenu}>Inicio</Link></li>
                <li><Link className="menu-link" to="/productos" onClick={closeMenu}>Productos</Link></li>
                <li><Link className="menu-link" to="/productos/medias" onClick={closeMenu}>Medias</Link></li>
                <li><Link className="menu-link" to="/productos/pantalones" onClick={closeMenu}>Pantalones</Link></li>
                <li><Link className="menu-link" to="/productos/remeras" onClick={closeMenu}>Remeras</Link></li>
                <li><Link className="menu-link" to="/productos/buzos" onClick={closeMenu}>Buzos</Link></li>
                <li><Link className="menu-link" to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto" onClick={closeMenu}>Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
};

export default Navbar;
