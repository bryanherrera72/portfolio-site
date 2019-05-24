import React from "react"
import { Link } from "gatsby"
import NavItems from './NavItems/Navitems';
import {StaticQuery, graphql} from 'gatsby';
import './Header.css';
const Header = (props) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <div className = {props.viewAtTop? "Header top": "Header"}>
          <h1 style = {{position:'relative', marginBottom: '5px'}}>
            <Link to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <NavItems></NavItems>
        </div>
    )}
  />
  
)


export default Header
