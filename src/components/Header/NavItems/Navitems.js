import React from 'react'
import NavItem from './NavItem/NavItem';
import './NavItems.css';
const navItems = props => {
    return (
        <div className = "NavItems">
            <NavItem toPage = "/about/">About</NavItem>
            <NavItem toPage = "/projects/">Projects</NavItem>
            <NavItem toPage = "/contact/">Contact</NavItem>
            <NavItem toPage = "/blog/">Blog</NavItem>
        </div>
    );
}

export default navItems;