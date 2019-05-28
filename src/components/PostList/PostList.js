import React from 'react';
import PostListItem from './PostListItem/PostListItem';
import propTypes from 'prop-types';
const postList = props =>{

    return (
        <>
            {
                props.posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <PostListItem post = {post}/>
                            
                        )
                    })
            }
        </>
    );
}
postList.propTypes = {
    posts: propTypes.array
}


export default postList;