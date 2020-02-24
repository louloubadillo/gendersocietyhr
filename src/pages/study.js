import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import { kebabCase } from 'lodash';

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const StudySection = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark(filter: { frontmatter: { category: { eq: "study"} } } 
            sort: {order: DESC, fields: [frontmatter___date]}
            ){
                edges {
                    node{
                        frontmatter{
                            tags
                            title
                            description
                            date
                            tags
                            category
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
    return(
        <div>
            <Layout>
            <Head title="Study Section"/>
            <div className = {blogStyles.banner}>
                <h1>Study</h1>
                <p>I am currently a Computer Science student. I have always enjoyed learning new things. <br></br>
                This section includes notes, tips for studying, productivity hacks and more. </p>
            </div>
            <div className = {blogStyles.posts}>
               {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <div className = {blogStyles.post}> 
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <Img fluid = {edge.node.frontmatter.ima.childImageSharp.fluid}/>
                            {edge.node.frontmatter.tags ? (
                                <div className= {blogStyles.tagsContainer}>
                                <ul className = {blogStyles.tagsList}>
                                    {edge.node.frontmatter.tags.map(tag => (
                                    <li key={tag + `tag`} className = {blogStyles.tag}>
                                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            ) : null}
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.description}</p>
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

export default StudySection