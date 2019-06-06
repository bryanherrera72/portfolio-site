import React from 'react';
import './SocialLink.css';
const button = props => {
    let color = '#718a82';
    let link = '#';

    if(props.color){
        color = props.color;
    }
    else{
        color = '#718a82';
    }
    if(props.link){
        link = props.link;
    }
    else{
        link = "#";
    }
    let styles = {
        position:'relative',
        textAlign: 'center',
        width: '200px',
        height: '50px',
        padding: '10px',
        margin:'10px 10px',
        backgroundColor: color,
        fontWeight: 'bold',
        borderRadius: '3px',
        boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, .2)'
    }
    return(
        <>
            <a href = {link} style = {styles}>{props.children}</a>
        </>
    );
}


export default button;