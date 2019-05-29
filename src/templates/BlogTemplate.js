import React from "react"
import { graphql } from "gatsby"
import './BlogTemplate.css';
import Layout from '../components/Layout/layout';

const blogTemplate = ({data})=>{
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    console.log(data);
    return (
        <Layout>
          <div className="BlogPostContainer" >
              <div className="BlogPost">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                  className="BlogPostContent"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
          </div>
        </Layout>
      )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default blogTemplate;