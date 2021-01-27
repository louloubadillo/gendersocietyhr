import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import postStyles from '../styles/post.module.scss'

export const query = graphql`
    query (
        $slug: String!
    ){
        markdownRemark(
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ){
            frontmatter{
                title
            }
            html
        }
    }
    `

const Blog = (props) => {
    return(
        <Layout>
            <Head  title={props.data.markdownRemark.frontmatter.title}/>
            <div className = {postStyles.container}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <div className = {postStyles.text} dangerouslySetInnerHTML={{__html : props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}
 
export default Blog