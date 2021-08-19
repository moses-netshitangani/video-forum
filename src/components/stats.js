import React, {useEffect, useState} from 'react';
import '../style/stats.css';

const Stats = props => {

    return(
        <div className={`stats-cover`}>

            {/* question */}
            <div className="question">
                <h4>What is a variable?</h4>
            </div>

            {/* bars */}
            <div className='bar-cover'>
                <div className='bar a'>Option A</div>
                <div className='bar b'>Option B</div>
                <div className='bar c'>Option C</div>
                <div className='bar d'>Option D</div>
            </div>

        </div>
    )
}

export default Stats;