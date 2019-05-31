import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout/layout';
import PostList from '../components/PostList/PostList';
import '../styles/blog.css';

const blog = ({data}) => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Layout>
            <div className="PostList">
                <PostList posts = {posts}/>
            </div>
        </Layout>
    )
}

export const blogListQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`


export default blog;