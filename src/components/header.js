import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './headers.module.scss'
import logo from '../logo.png';

const Header = () => {
    return(
        <header className = {headerStyles.header}>
            <br></br><br></br>
            <h1>Género, Sociedad y Derechos Humanos 101</h1>
            <nav className = {headerStyles.nav}>
                <ul className = {headerStyles.navList}>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/"> <span role="img" aria-label="Emoji de casa">🏠</span> Inicio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header