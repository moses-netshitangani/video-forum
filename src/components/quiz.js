import React, {useEffect, useState} from 'react';
import "../style/quiz.css";

const Quiz = props => {

    // select an option
    const [check1, onCheckChange1] = useState('unchecked1');
    const [check2, onCheckChange2] = useState('unchecked2');
    const [check3, onCheckChange3] = useState('unchecked3');
    const [check4, onCheckChange4] = useState('unchecked4');

    let option = id => {
        alert(id);
        if(`check${id}` === `unchecked${id}`)
            `onCheckChange${id}`("checked"+id);
        else
            `onCheckChange${id}`("unchecked"+id);
    }

    return(
        <div className={`quiz-cover ${props.cquiz}`}>
            {/* question */}
            <div className="question">
                <h4>What is a variable?</h4>
            </div>

            {/* options */}
            <div className="option A">
                <div className={`option-img ${check1}`} onClick={() => {onCheckChange1('checked1')}}></div>
                <p className="text">Option A goes here</p>
            </div>

            <div className="option B">
                <div className={`option-img ${check2}`} onClick={() => {onCheckChange2('checked2')}}></div>
                <p className="text">Option B goes here</p>
            </div>

            <div className="option C">
                <div className={`option-img ${check3}`} onClick={() => {onCheckChange3('checked3')}}></div>
                <p className="text">Option C goes here</p>
            </div>

            <div className="option D">
                <div className={`option-img ${check4}`} onClick={() => {onCheckChange4('checked4')}}></div>
                <p className="text">Option D goes here</p>
            </div>

        </div>
    )
}

export default Quiz;