import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Forum from './forum';
import Video from './video';
import Quiz from './quiz';
import Stats from './stats';
import Admin from './admin';

const VideoForum = () => {

    // video, quiz and stats stores
    const [link, onLink] = useState("");
    const [id, onId] = useState("");
    const [quizList, onList] = useState([]);
    const [statsList, onStatsList] = useState([]);
    const [quiz, onQuiz] = useState({});
    const [quizDone, onDone] = useState("no");
    const [time, onTime] = useState("");
    const [lock, onLock] = useState('true');

    // forum and quiz display variables
    let [cforum, changeCforum] = useState("show");
    let [cquiz, changeCquiz] = useState("hide");
    const [heading, changeHeading] = useState('Lecture-Video Forum Component');

    // toggling other tabs
    const [lesson, onLesson] = useState("flex");
    const [statShow, onStatShow] = useState("hide");
    const [adminShow, onAdminShow] = useState("hide");

    // fetch lecture video and quiz data
    useEffect(() => {

        // filters first quiz object from list
        const fil = e => {
            return quizList.indexOf(e) > 0;
        }

        if(link === "")
        {
            // fetch lesson
            fetchLesson();

            // fetch quiz statistics
            fetchStats();
        }
        
        // send next quiz, if available
        if(quizDone === "yes")
        {
            fetchStats();
            if(quizList.length > 1)
            {
                let newQuizList = quizList.filter(fil);
                onList(newQuizList);
                onQuiz(newQuizList[0]);
                onTime(newQuizList[0].time);
                onDone("no");
            }
            else
            {
                // set quiz time to random large number
                onTime("90:55");
            }
        }
    }, [link, quizDone, quizList])

    // fetch statistics
    const fetchStats = () => {
        console.log(process.env);
        axios.get("/stats")
        .then(res => onStatsList(res.data[0].stats))
        .catch(err => console.log(err));
    }

    // fetch lesson
    const fetchLesson = () => {
        axios.get("/setup")
        .then(res => {
            onLink(res.data[0].link);
            onId(res.data[0]._id);
            onList(res.data[0].quizzes);
            onQuiz(res.data[0].quizzes[0]);
            onTime(res.data[0].quizzes[0].time);
        })
        .catch(err => console.log(err));
    }

    // // filters first quiz object from list
    // const fil = e => {
    //     return quizList.indexOf(e) > 0;
    // }

    // toggles forum or quiz
    let swap = e => {
        if(lesson === "flex")
        {
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
        }else
        {
            if(e === "stats")
                changeHeading("Quiz Statistics");
            else
                changeHeading("Administrator");
        }
    }

    // toggles lesson, stats, admin
    const toggleView = e => {
        if(e === "lesson")
        {
            onLesson("flex");
            onStatShow("hide");
            onAdminShow("hide");
        }
        else if(e === "stats")
        {

            onLesson("hide");
            onStatShow("flex");
            onAdminShow("hide");

        }
        else
        {
            onLesson("hide");
            onStatShow("hide");
            onAdminShow("initial");
        }
    }

    if(lesson === "flex")
    {
        return (
            // landing page 
            <div>
                 <div className="toggle">
                    <div className="toggle-inner">
                        <div onClick={() => {toggleView("lesson")}}>Lesson</div>
                        <div onClick={() => {toggleView("stats")}}>Stats</div>
                        <div onClick={() => {toggleView("admin")}}>Admin</div>
                    </div>
                </div>

                <div>
                    <h2 style={{margin: '1em 0 2em 0'}}>
                        {heading}
                    </h2>
                </div>

                <div className={`${lesson}`}>
                    {/* switch between quiz and forum */}
                    <div className={`switch-tab`} onClick={() => {swap('q')}}>Quiz</div>
                    <div className={`switch-tab frm`} onClick={() => {swap('f')}}>Forum</div>

                    <div className="video-forum">
                        <Video onLock={onLock} time={time} done={quizDone} link={link} foc={swap}/>
                        <Forum id={id} cforum={cforum} />
                        <Quiz id={id} lock={lock} onLock={onLock} quiz={quiz} onDone={onDone} cquiz={cquiz} />
                    </div>
                </div>
            </div>
        );
    }
    else if(statShow === "flex")
    {
        return (
            <div>
                <div className="toggle">
                    <div onClick={() => {toggleView("lesson")}}>Lesson</div>
                    <div onClick={() => {toggleView("stats")}}>Stats</div>
                    <div onClick={() => {toggleView("admin")}}>Admin</div>
                </div>

                <div>
                    <h2 style={{margin: '1em 0 2em 0'}}>
                        {"Quiz Statistics"}
                    </h2>
                </div>

                <div className={statShow}>
                    <Stats stats={statsList} />
                </div>
            </div>
        );
    }
    else
    {
        return (
           <div>
                <div className="toggle">
                 <div onClick={() => {toggleView("lesson")}}>Lesson</div>
                 <div onClick={() => {toggleView("stats")}}>Stats</div>
                 <div onClick={() => {toggleView("admin")}}>Admin</div>
                </div>

                <div>
                    <h2 style={{margin: '1em 0 2em 0'}}>
                        {"Administrator"}
                    </h2>
                </div>
                <div className={adminShow}>
                    <Admin />
                </div>
           </div>
        );
    }
    
}

export default VideoForum;