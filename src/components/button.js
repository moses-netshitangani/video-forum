import React from 'react';
import '../style/button.css';

const Button = props => {
    return(
        <div className="button-cover" onClick={props.onClick}>
            Ask Question
        </div>
    )
}

export default Button;