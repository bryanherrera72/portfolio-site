import React from 'react';
import {Link} from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import './NavItem';
const navItem = props =>{
    return (
        // <AniLink className = "NavItem"  to={props.toPage}>{props.children}</AniLink>
        <Link className = "NavItem" to={props.toPage} >{props.children}</Link>
    );
}
export default navItem;