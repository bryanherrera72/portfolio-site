import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'gatsby';
import './PostListItem.css';

const postListItem = props => {
    return (
        <div className="PostListItem" >
            <h1>
                <Link to={props.post.frontmatter.path}>{props.post.frontmatter.title}</Link>
            </h1>
            <h3>{props.post.frontmatter.date}</h3>
            <p>{props.post.excerpt}</p>
        </div>
    )
}

postListItem.propTypes = {
    post: propTypes.shape({
        id: propTypes.string.isRequired,
        excerpt:propTypes.string.isRequired,
        frontmatter: propTypes.shape({
            title:propTypes.string,
            date:propTypes.string,
            
        }).isRequired
    })
};

export default postListItem;