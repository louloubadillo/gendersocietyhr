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
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/"> 🏠 Home</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/code"> 💻 Code</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/work"> 💼 Work</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/study"> 📚 Study</Link>
                    </li>
                    <li>
                        <Link className = {headerStyles.navItem} activeClassName = {headerStyles.activeNavItem} to="/projects"> 💡 Projects</Link>
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