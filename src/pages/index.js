import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { kebabCase } from 'lodash';

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const HomePage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(filter: { frontmatter: { cover: { eq: true} } }
                sort: {fields: [frontmatter___date, frontmatter___title] order: DESC}
                ) {
                edges {
                    node{
                        frontmatter{
                            tags
                            title
                            description
                            category
                            date(formatString: "DD/MM/YYYY")
                            tags
                            ima {
                                childImageSharp {
                                    fluid(quality: 90, traceSVG: { color: "#2B2B2F" }) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }

                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <div>
            <Layout>
                <Head title="Inicio"/> 
                <div className = {blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) =>{
                        return (
                            <div className = {blogStyles.post}> 
                                <Link to={`/${edge.node.fields.slug}`}>
                                <Img fluid = {edge.node.frontmatter.ima.childImageSharp.fluid}/>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        </div>
    )    
}

export default HomePage
