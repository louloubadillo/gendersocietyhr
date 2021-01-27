import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return (
        <footer className = {footerStyles.background}>
            <br></br>
<p className = {footerStyles.background}>Hecho con ❤ por edvilme y louloubadillo</p>
        </footer>
    )
}

export default Footer