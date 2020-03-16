import React from 'react'
import {Link} from 'gatsby'

import headerStyles from './headers.module.scss'
import logo from '../logo.png';

const Header = () => {
    return(
        <header className = {headerStyles.header}>
            <img className = {headerStyles.hero} src={logo} alt="Logo" />
            <nav className = {headerStyles.nav}>
                <ul className = {headerStyles.navList}>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/"> 🏠 Inicio</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/programacion"> 💻 Programación</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/trabajo"> 💼 Trabajo</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/estudio"> 📚 Estudio</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/proyectos"> 💡 Proyectos</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/tags"> 🏷 Tags</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header