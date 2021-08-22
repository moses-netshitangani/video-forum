import React, {useState, useRef} from 'react';
import ReactPlayer from 'react-player';
import '../style/admin.css';

const Admin = () => {

    // ref to access the ReactPlayer
    const player = useRef(null);

    // change video URL
    const [url, OnUrl] = useState("https://");

    // states for quiz
    const [link, setLink] = useState('');
    const [ques, setQues] = useState('');
    const [optA, setOptA] = useState('');
    const [optB, setOptB] = useState('');
    const [optC, setOptC] = useState('');
    const [optD, setOptD] = useState('');
    const [corr, setCorr] = useState('');
    const [time, setTime] = useState('');

    

    // methods encapsulating state change
    let changeLink = e => setLink(e.target.value);
    let changeQues = e => setQues(e.target.value);
    let changeOA = e => setOptA(e.target.value);
    let changeOB = e => setOptB(e.target.value);
    let changeOC = e => setOptC(e.target.value);
    let changeOD = e => setOptD(e.target.value);
    let changeOCorr = e => setCorr(e.target.value);
    let changeTime = e => setTime(e.target.value);


    // quiz structure
    let quizTemp = {
        link: link,
        question: ques,
        optA: optA,
        optB: optB,
        optC: optC,
        optD: optD,
        correct: corr,
        time: time
    }
    const createQuiz = () => {
        console.log(quizTemp);
    }

    const getLink = () => {
        OnUrl(document.getElementById('link').value);
    }

    return (
        <div>
            <h3>Administrator Page</h3>
            
            <div className='admin-cover'>
                {/* Lecture Video */}
                <div className='create-video'>

                    <div id='submit-link'>
                        <input type='text' id='link' onChange={e => setLink(e.target.value)}
                        placeholder='Lecture video YouTube link'/>
                        <div onClick={getLink} className='button-cover c'>Link Video</div>
                    </div>

                    <ReactPlayer controls ref={player} width="95%"
                     height="75%" style={{margin: '0 auto'}} url={url} />

                </div>

                {/* Create Quiz */}
                <div className="create-cover">

                    <form className='quiz-template'>
                        <input type='text' placeholder='Type in quiz question' 
                        onChange={e => {setQues(e.target.value)}} id='q' />
                        <input type='text' placeholder='Option A' onChange={e => {setOptA(e.target.value)}}/>
                        <input type='text' placeholder='Option B' onChange={e => {setOptB(e.target.value)}}/>
                        <input type='text' placeholder='Option C' onChange={e => {setOptC(e.target.value)}}/>
                        <input type='text' placeholder='Option D' onChange={e => {setOptD(e.target.value)}}/>
                        <input type='text' placeholder='Correct Option' onChange={e => {setCorr(e.target.value)}}/>
                        <input type='text' placeholder='Time in [mm:ss] format' id='t' onChange={e => {setTime(e.target.value)}} />
                    </form>
                    
                    <div className="button-cover c" onClick={createQuiz}>
                        Create Quiz
                    </div>

                </div>
                
            </div>
            
        </div>
    );
}

export default Admin;