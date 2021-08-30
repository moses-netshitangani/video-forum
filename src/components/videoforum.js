import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Forum from './forum';
import Video from './video';
import Quiz from './quiz';
import Stats from './stats';

const VideoForum = () => {

    // video, quiz and stats stores
    const [link, onLink] = useState("");
    const [id, onId] = useState("");
    const [quizList, onList] = useState([]);
    const [quiz, onQuiz] = useState({});
    const [quizDone, onDone] = useState("no");
    const [time, onTime] = useState("");
    const [lock, onLock] = useState('true');
    const [stats, OnStats] = useState([]);

    // forum and quiz display variables
    let [cforum, changeCforum] = useState("show");
    let [cquiz, changeCquiz] = useState("hide");
    const [heading, changeHeading] = useState('Lecture-Video Forum Component');

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
                onTime(res.data[0].quizzes[0].time);
                OnStats(res.data[0].quizzes[0].stats);
            })
            .catch(err => console.log(err));
        }
        
        // send next quiz, if available
        if(quizDone === "yes")
        {
            if(quizList.length > 1)
            {
                quizList.shift();
                onList(quizList);
                onQuiz(quizList[0]);
                onTime(quizList[0].time);
                OnStats(stats.push(quizList[0].stats));
                onDone("no");
            }
            else
            {
                // send quiz time to random larger number
                onTime("90:55");
            }

           
            
        }
    })

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
            </div>

            <div className="video-forum">
                <Video onLock={onLock} time={time} done={quizDone} link={link} foc={swap}/>
                <Forum id={id} cforum={cforum} />
                <Quiz lock={lock} onLock={onLock} quiz={quiz} onDone={onDone} cquiz={cquiz} />
                <Stats stats={stats} />
            </div>

        </div>

    );
}

export default VideoForum;