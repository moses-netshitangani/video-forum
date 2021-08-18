import React, {useEffect, useState} from 'react';
import "../style/quiz.css";

const Quiz = props => {

    // quiz feedback
    const [showCorrect, onShowCorrect] = useState('false');
    const [showIncorrect, onShowIncorrect] = useState('false');
    const [showFb, onShowFb] = useState('false');
    const [lock, onLock] = useState('false');

    // quiz logic
    const quizComp = {
        question: 'What is a variable?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correct: 'Option B'
    }

    const checkAnswer = num => {
            if(quizComp.correct === quizComp.options[num - 1])
            {
                document.getElementById(`${num}`).className = 'option-img correct';
                
                // show feedback
                onShowFb('feedback green');
                onShowCorrect('true');
            }
            else
            {
                document.getElementById(`${num}`).className = 'option-img incorrect';
                
                // show feedback
                onShowFb('feedback red');
                onShowIncorrect('true')
            }

            // lock quiz
            onLock('lock');
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
                <div className={`option-img`} id='1'></div>
                <p className="text">{quizComp.options[0]}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(2)}}>
                <div className={`option-img`} id='2' ></div>
                <p className="text">{quizComp.options[1]}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(3)}}>
                <div className={`option-img`} id='3' ></div>
                <p className="text">{quizComp.options[2]}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(4)}}>
                <div className={`option-img`} id='4' ></div>
                <p className="text">{quizComp.options[3]}</p>
            </div>

            <div className={showFb}>
                <h4 className={`right ${showCorrect}`}>Correct!</h4>
                <h4 className={`wrong ${showIncorrect}`}>Correct Answer is {quizComp.correct}</h4>
            </div>

        </div>
    )
}

export default Quiz;