import React from "react"
import { Link } from "gatsby"
import NavItems from './NavItems/Navitems';
import Hamburger from '../Hamburger/Hamburger';
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
      <>
        <div className = {props.viewAtTop? "Header top": "Header"}>
          <h1 style = {{position:'relative', marginBottom: '5px'}}>
            <Link to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <div className = "Desktop">
            <NavItems/>
          </div>
          <div className = "MobileIcon" onClick={props.expandNav}>
            <Hamburger/>
          </div>
        </div>
        <div className = {props.expanded? "MobileNav" : "MobileNav closed"}>
          <NavItems/>
        </div>
        </>
    )}
  />
  
)


export default Header
