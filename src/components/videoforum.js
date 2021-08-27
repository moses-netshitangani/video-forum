import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Forum from './forum';
import Video from './video';
import Quiz from './quiz';

const VideoForum = () => {

    // video and quiz stores
    const [link, onLink] = useState("");
    const [id, onId] = useState("");
    const [quizList, onList] = useState([]);
    const [quiz, onQuiz] = useState({});
    const [quizDone, onDone] = useState("no");

    // fetch lecture video and quiz data
    useEffect(() => {
        if(link === "")
        {
            axios.get("http://localhost:3001/setup")
            .then(res => {
                onLink(res.data[0].link);
                onId(res.data[0]._id);
                onList(res.data[0].quizzes);
                onQuiz(res.data[0].quizzes[0]);
                // console.log(res.data[0].quizzes[0]);
            })
            .catch(err => console.log(err));
        }
        
        if(quizDone === "yes" && quizList.length > 0)
        {
            quizList.shift();
            onList(quizList);
            onQuiz(quizList[0]);
            onDone("no");
        }

        

    })

    // send quizzes sequentially
    const sendQuiz = () => {
        if(quizDone === "yes" && quizList.length > 0)
        {
            quizList.shift();
            onList(quizList);
            onQuiz(quizList[0]);
            onDone("no");
        }
    }

    // forum and quiz display variables
    let [cforum, changeCforum] = useState("show");
    let [cquiz, changeCquiz] = useState("hide");
    const [heading, changeHeading] = useState('Lecture-Video Forum Component');

    let swap = e => {
        if(e === 'q')
        {
            changeCforum("hide");
            changeCquiz("show");    
            changeHeading("Mandatory Quiz Component");
        }else
        {
            changeCforum("show");
            changeCquiz("hide");
            changeHeading("Lecture-Video Forum Component");
        }
    }

    return(

        <div>
            <div className='switch-tab'onClick={() => {swap('q')}}>Quiz</div>
            <div className='switch-tab frm'onClick={() => {swap('f')}}>Forum</div>
            <div>
                <h2 style={{margin: '1em 0 2em 0'}}>
                    {heading}
                </h2>
                {quizDone}
            </div>

            <div className="video-forum">
                <Video link={link} foc={swap}/>
                <Forum id={id} cforum={cforum} />
                <Quiz quiz={quiz} onDone={onDone} cquiz={cquiz} />
            </div>

        </div>

    );
}

export default VideoForum;