import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return(
        <Layout>
            <h1>Page not Found</h1>
            <h3> Oops, something went wrong. The page you were looking for doesn't exist.</h3>
            <p>
             <Link to= "/"> Click here to return home </Link>
            </p>
        </Layout>
    )
}

export default NotFound