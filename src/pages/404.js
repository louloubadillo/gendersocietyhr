import React from 'react'
import {Link} from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'

const NotFound = () => {
    return(
        <Layout>
            <Head title="Error 404"/>
            <h1>Página no encontrada</h1>
            <h3> ¡Ups! Algo salió mal. La página que estabas buscando no existe.</h3>
            <p>
             <Link to= "/"> Da click para regresar al inicio </Link>
            </p>
        </Layout>
    )
}

export default NotFound