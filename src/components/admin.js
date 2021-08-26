import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../style/admin.css';

function Admin () {

    // ref to access the ReactPlayer
    const player = useRef(null);

    // change video URL
    const [url, OnUrl] = useState("https://");

    // states for quiz
    const [link, setLink] = useState('');

    // stores quizzes
    let quizList = [];    


    // extract all quiz values
    const extractValues = () => {
        let q = document.getElementById("ques").value;
        let oa = document.getElementById("oa").value;
        let ob = document.getElementById("ob").value;
        let oc = document.getElementById("oc").value;
        let od = document.getElementById("od").value;
        let co = document.getElementById("co").value;
        let t = document.getElementById("t").value;

        let quizTemp = {
            question: q,
            optA: oa,
            optB: ob,
            optC: oc,
            optD: od,
            correct: co,
            time: t
        }

        quizList.push(quizTemp);
        console.log(quizList);
    }

    // create lesson
    const createLesson = () => {
        let lesson = {
            link: link,
            quizzes: quizList
        }

        axios.post("http://localhost:3001/setup/add", lesson)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const getLink = () => {
        OnUrl(document.getElementById('link').value);
    }

    return (
        <div>
            <h3>Administrator Page</h3>
            
            <div className='admin-cover'>

                <div className='create-content'>
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

                        <div className='quiz-template'>
                            <input type='text' placeholder='Type in quiz question' id='ques' />
                            <input id="oa" type='text' placeholder='Option A' />
                            <input id="ob" type='text' placeholder='Option B' />
                            <input id="oc" type='text' placeholder='Option C' />
                            <input id="od" type='text' placeholder='Option D' />
                            <input id="co" type='text' placeholder='Correct Option' />
                            <input type='text' placeholder='Time in [mm:ss] format' id='t' />
                        </div>
                        
                        <div className="button-cover c" onClick={extractValues}>
                            Add Quiz
                        </div>

                    </div>
                </div>

                <div className="button-cover d" onClick={createLesson}>
                    Submit Lesson
                </div>
                
            </div>
            
        </div>
    );
}

export default Admin;