import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import Layout from '../components/layout';
import tagStyles from './tags.module.scss'
import Head from '../components/head'

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <Layout>
      <Head title="Tags"/>
      <div>
        <h1>Tags</h1>
        <ul className = {tagStyles.decor}>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      edges{
        node{
          frontmatter{
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;