import React, { useEffect } from 'react';
import '../style/button.css';

const Button = props => {

    useEffect (() => console.log(props.onClick));
    
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