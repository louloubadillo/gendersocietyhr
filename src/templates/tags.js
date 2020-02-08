import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout';
import blogStyles from '../styles/tags.module.scss'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <div>
    <Layout>
      <div className = {blogStyles.banner}>
          <h1>{tagHeader}</h1>
      </div>
      <div className = {blogStyles.posts}>
        
          {edges.map(({ node }) => {
            const { title, date, description, ima } = node.frontmatter;
            const { slug } = node.fields;
            return (
              <div className = {blogStyles.post}> 
                <Link to={`/blog/${slug}`}>
                  <Img fluid = {ima.childImageSharp.fluid}/>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <p>{date}</p>            
                  </Link>
                  </div>
            );
          })}
        
        </div>
        <Link to="/tags">All tags</Link>
    </Layout>
    </div> 
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            ima {
              childImageSharp {
                  fluid(quality: 90, traceSVG: { color: "#2B2B2F" }) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
              }
          }
          }
        }
      }
    }
  }
`;