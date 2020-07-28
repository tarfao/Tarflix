import React from 'react';
import './Menu.css'
import Logo from '../../assets/image/tarflix.png';
import ButtonLink from './componentes/ButtonLink';
import Button from '../Button';

function Menu(props) {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Tarflix Logo" />
            </a>

            <Button href='/' className='ButtonLink'>
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;