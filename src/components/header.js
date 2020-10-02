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
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/"> <span role="img" aria-label="Emoji de casa">🏠</span> Inicio</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/programacion"> <span role="img" aria-label="Emoji de computadora">💻</span> Programación</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/trabajo">   <span role="img" aria-label="Emoji de portafolio">💼</span> Trabajo</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/notas">  <span role="img" aria-label="Emoji de libros">📚</span> Notas</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/proyectos">  <span role="img" aria-label="Emoji de un foco">💡</span> Proyectos</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/tags">  <span role="img" aria-label="Emoji de etiqueta">🏷️</span> Tags</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header