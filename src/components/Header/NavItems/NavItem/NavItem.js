import React from 'react';
import {Link} from 'gatsby';
import './NavItem';
const navItem = props =>{
    return (
        <Link className = "NavItem" to={props.toPage}>{props.children}</Link>
    );
}
export default navItem;