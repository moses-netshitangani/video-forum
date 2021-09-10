import React from 'react';
import '../style/button.css';

const Button = props => {

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