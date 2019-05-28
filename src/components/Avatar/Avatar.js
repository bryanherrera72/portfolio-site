import React from 'react';
import './Avatar.css';

const avatar = props => {
    return (
        <div className = "Avatar">
            <div className = "InnerImg">
                {props.children}
            </div>
        </div>
    );
}
export default avatar;