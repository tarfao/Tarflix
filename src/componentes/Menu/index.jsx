import React from 'react';
import './Menu.css'
import Logo from '../../assets/image/tarflix.png';
import ButtonLink from './componentes/ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Tarflix Logo" />
            </Link>

            <Button as={Link} to='/cadastro/video' className='ButtonLink'>
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;