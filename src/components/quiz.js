import React, {useEffect, useState} from 'react';
import "../style/quiz.css";

const Quiz = props => {

    // quiz answer
    const [lock, onLock] = useState('false');

    // question and answers
    const [ques, onQues] = useState("");
    const [optA, onA] = useState("");
    const [optB, onB] = useState("");
    const [optC, onC] = useState("");
    const [optD, onD] = useState("");
    const [selectedAns, onSelect] = useState("");

    useEffect(() => {
        if(props.quiz.length !== 0)
        {
            console.log(props.quiz);
            onQues(props.quiz.question);
            onA(props.quiz.optA);
            onB(props.quiz.optB);
            onC(props.quiz.optC);
            onD(props.quiz.optD);
        }
        
        // need to extract quiz time as well
    });

    // loads next quiz
    // const nextQuiz = () => {

    // }

    const checkAnswer = num => {

        for(let i = 1; i < 5; i++)
        {
            if(i === num)
            {
                document.getElementById(`${num}`).className = 'selected';
                
                switch(num) {
                    case 1:
                        onSelect(optA);
                        break;
                    case 2:
                        onSelect(optB);
                        break;
                    case 3:
                        onSelect(optC);
                        break;
                    case 4:
                        onSelect(optD);
                        break;
                }
            }
            else
            {
                document.getElementById(`${i}`).className = 'false';
            }
        }
    }

    const submitAns = () => {
        if(selectedAns !== '')
        {
            onLock('lock');
            alert(selectedAns);
            props.onDone("yes");
        }
        else
            alert("Choose a single option");
    }

    return(
        <div className={`quiz-cover ${props.cquiz}`}>

            {/* invisible page for locking quiz */}
            <div className={lock}></div>

            {/* question */}
            <div className="question">
                <h4>{ques}</h4>
            </div>

            {/* options */}
            <div className="option" onClick={() => {checkAnswer(1)}}>
                <div className={`option-img`} >
                    <div className='false' id='1'></div>
                </div>
                <p className="text">{optA}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(2)}}>
                <div className={`option-img`} >
                    <div className='false' id='2'></div>
                </div>
                <p className="text">{optB}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(3)}}>
                 <div className={`option-img`} >
                    <div className='false' id='3'></div>
                </div>
                <p className="text">{optC}</p>
            </div>

            <div className="option" onClick={() => {checkAnswer(4)}}>
                <div className={`option-img`} >
                    <div className='false' id='4'></div>
                </div>
                <p className="text">{optD}</p>
            </div>

            <div className="submit-btn" onClick={() => {submitAns()}}>
                Submit
            </div>


        </div>
    )
}

export default Quiz;