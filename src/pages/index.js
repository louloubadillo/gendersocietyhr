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
            allMarkdownRemark(
                sort: {fields: [frontmatter___date, frontmatter___title] order: DESC}
                ) {
                edges {
                    node{
                        frontmatter{
                            title
                            date(formatString: "DD/MM/YYYY")
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
