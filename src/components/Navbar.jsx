import React from 'react';
import "../css/Navbar.css"


const Navbar = ({ openModal, closeModal, open }) => {

    return (
        <>
            <header>
                <div className="logo">
                    <img src="Logo.jpeg" alt="Logos" />
                    <img src="logo2.png" alt="Logos" className='logo2' />
                    <img src="logo3.jfif" alt="Logos" />
                </div>
                {/* <div className="iconPerfil"><img src="../../public/iconoPerfil.svg" /></div> */}
            </header>
            <nav className="navBar">
                <li className="enlace" onClick={openModal}>Instrucciones</li>
                <li className="enlace"><a href="#power">Datos</a></li>

            </nav>

        </>
    )
};

export default Navbar;
