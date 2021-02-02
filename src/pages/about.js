import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { kebabCase } from 'lodash';

import Layout from '../components/layout'
import Head from '../components/head'
import postStyles from '../styles/post.module.scss'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Sobre El Proyecto"/> 
                <div className = {postStyles.container}>
                    <div className = {postStyles.text}>
                        <h1>¿Quiénes somos?</h1>
                        <p>Somos dos estudiantes de Ingeniería en Tecnologías Computacionales: Eduardo Villalpando y Lourdes Badillo.</p>
                        <h1>Nuestro Propósito</h1>
                        <p>Quisimos utilizar el conocimiento que tenemos gracias a nuestra carrera y el que obtuvimos gracias a esta materia para desarrollar este sitio, donde compartimos breves explicaciones acerca de los temas de la clase.
                        </p>
                        <h1>Referencias y sitios de interés</h1>
                        <p>El desarrollo de la página y de las ilustraciones es completamente nuestro.</p>
                        <p>En cuanto al contenido, obtuvimos información de: </p>
                        <ul>
                            <li>La clase impartida por la Dra. Diana Correa Corrales</li>
                            <li><a href="https://www.un.org" target="_blank">UN</a></li>
                            <li><a href="https://www.unwomen.org/en" target="_blank">UN Women</a></li>
                            <li><a href="https://www.inegi.org.mx" target="_blank">INEGI</a></li>
                            <li><a href= "https://www.eluniversal.com.mx/" target="_blank">El Universal</a></li>
                            <li>El Feminismo es para Todo el Mundo - bell hooks</li>
                        </ul>
                     </div>
                </div>
            </Layout>
        </div>
    )    
}

export default AboutPage
