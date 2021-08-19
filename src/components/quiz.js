import React, {useEffect, useState} from 'react';
import "../style/quiz.css";

const Quiz = props => {

    // quiz answer
    let selectedAns = '';
    const [lock, onLock] = useState('false');

    // quiz logic
    const quizComp = {
        question: 'What is a variable?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correct: 'Option B'
    }

    const checkAnswer = num => {

        for(let i = 1; i < 5; i++)
        {
            if(i === num)
            {
                document.getElementById(`${num}`).className = 'selected';
                selectedAns = quizComp.options[num - 1];
            }
            else
            {
                document.getElementById(`${i}`).className = 'false';
            }
        }
    }

    return(
        <div className={`quiz-cover ${props.cquiz}`}>
            {/* invisible page for locking quiz */}
            <div className={lock}></div>

            {/* question */}
            <div className="question">
                <h4>{quizComp.question}</h4>
            </div>

            {/* options */}
            <div className="option" onClick={() => {checkAnswer(1)}}>
                <div className={`option-img`} >
                    <div className='false' id='1'></div>
                </div>
                <p className="text">{quizComp.options[0]}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(2)}}>
                <div className={`option-img`} >
                    <div className='false' id='2'></div>
                </div>
                <p className="text">{quizComp.options[1]}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(3)}}>
                 <div className={`option-img`} >
                    <div className='false' id='3'></div>
                </div>
                <p className="text">{quizComp.options[2]}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(4)}}>
                <div className={`option-img`} >
                    <div className='false' id='4'></div>
                </div>
                <p className="text">{quizComp.options[3]}</p>
            </div>

            <div className="submit-btn" onClick={() => {alert(selectedAns)}}>
                Submit
            </div>


        </div>
    )
}

export default Quiz;