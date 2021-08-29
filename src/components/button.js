import React from 'react';
import '../style/button.css';

const Button = props => {
    
    // locks the button
    
    return(
        <div className='button-outer'>
            <div className="button-cover" onClick={props.onClick}>
                Get Timestamp
            </div>
            <div className={props.bLock}></div>
        </div>

        
    )
}

export default Button;