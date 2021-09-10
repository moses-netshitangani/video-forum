import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Forum from './forum';
import Video from './video';
import Quiz from './quiz';
import Stats from './stats';
import Admin from './admin';
import Button from './button';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Lesson = () => {

    // video, quiz and stats stores
    const [link, onLink] = useState("");
    const [id, onId] = useState("");
    const [stat_id, onStatId] = useState("");
    const [quizList, onList] = useState([]);
    const [statsList, onStatsList] = useState([]);
    const [quiz, onQuiz] = useState({});
    const [quizDone, onDone] = useState("no");
    const [respon, onResp] = useState([]);
    const [time, onTime] = useState("");
    const [lock, onLock] = useState('true');
    const [skip, onSkip] = useState(false);
    const [btn_show, onBtn_show] = useState("initial");
    const [timeString, onTimeString] = useState("");

    // forum and quiz display variables
    let [cforum, changeCforum] = useState("show");
    let [cquiz, changeCquiz] = useState("hide");
    const [heading, changeHeading] = useState('Lecture-Video Forum Component');
    const [menu, onMenu] = useState("hide");

    // toggling other tabs
    const [lesson, onLesson] = useState("flex");
    const [statShow, onStatShow] = useState("hide");
    const [adminShow, onAdminShow] = useState("hide");

    // fetch statistics
    const fetchStats = () => {
        axios.get("/stats")
        .then(res => {
            onStatsList(res.data[0].stats);
            onStatId(res.data[0]._id);
        })
        .catch(err => console.log(err));
    }

    // collect number of responses
    const collectResponses = liss => {
        let tempList = [];
        for(let i = 0; i < liss.length; i++)
        {
            let r = [liss[i].resp];
            tempList.push(r);
        }
        onResp(tempList);
        console.log(respon);
    }

    // fetch lecture video and quiz data
    useEffect(() => {

        // fetch lesson
        const fetchLesson = () => {
            axios.get("/setup")
            .then(res => {
                onLink(res.data[0].link);
                onId(res.data[0]._id);
                onList(res.data[0].quizzes);
                onQuiz(res.data[0].quizzes[0]);
                onTime(res.data[0].quizzes[0].time);
                collectResponses(res.data[0].quizzes);
            })
            .catch(err => console.log(err));
        }

        // fetch responses
        const fetchResp = () => {
            axios.get("/setup")
            .then(res => {
                collectResponses(res.data[0].quizzes);
            })
            .catch(err => console.log(err));
        }

        // update number of responses
        const updateResponses = () => {

            let updateObject = {
                id: id,
                question: quiz.question
            }
            axios.put("/setup/update", updateObject)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        }

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
            // update quiz stats
            updateResponses();
            fetchResp();
            fetchStats();
            if(quizList.length > 1)
            {
                let newQuizList = quizList.filter(fil);
                onList(newQuizList);
                onQuiz(newQuizList[0]);
                onTime(newQuizList[0].time);
            }
            else
            {
                // set quiz time to random large number
                onTime("90:55");
            }
            onDone("no");
        }

    }, [link, quizDone, quizList, respon, id, quiz.question])

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

    // displays menu
    const showMenu = () => {
        if(menu === "hide")
            onMenu("toggle-inner");
        else
            onMenu("hide");
    }

    // hides skip quizzes button 
    const hideBtn = () => {
        onSkip(true);
        onBtn_show("hide");
    }

    if(lesson === "flex")
    {
        return (
            // landing page 
            <div>
                <div className="toggle" onClick={showMenu}>
                    <div></div>
                    <div></div>
                </div>

                <div className={menu}>
                    <div onClick={() => {toggleView("lesson")}}>Lesson</div>
                    <div onClick={() => {toggleView("stats")}}>Stats</div>
                    <div onClick={() => {toggleView("admin")}}>Admin</div>
                </div>

                <div>
                    <h2 style={{margin: '1em 0 2em 0'}}>
                        {heading}
                    </h2>
                </div>

                <div className="lesson-cover">
                    
                    <div className="tog-btns">
                        <div className={`switch-tab frm`} onClick={() => {swap('f')}}>Forum</div>
                        <div className={`switch-tab`} onClick={() => {swap('q')}}>Quiz</div>
                    </div>

                    <div className={`${lesson} tess`}>
                        <div className="video-forum">
                            <Video onLock={onLock} time={time} onTimeString={onTimeString} done={quizDone} 
                            link={link} foc={swap} skip={skip}/>
                            <Forum id={id} cforum={cforum} />
                            <Quiz id={id} stat_id={stat_id} lock={lock} skip={skip} onLock={onLock} 
                            quiz={quiz} onDone={onDone} cquiz={cquiz} />
                        </div>
                    </div>

                    <div className="spc"></div>

                    <div className="main-btns" >
                        <div id="first-btn">
                            <CopyToClipboard text={timeString} >
                                <Button />
                            </CopyToClipboard>
                        </div>
                        <div id="scnd-btn">
                            <div className={`button-cover skip ${btn_show}`} onClick={hideBtn}>Continuous Play</div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
    else if(statShow === "flex")
    {
        return (
            <div>
                <div className="toggle" onClick={showMenu}>
                    <div></div>
                    <div></div>
                </div>

                <div className={menu}>
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
                    <Stats stats={statsList} resp={respon} />
                </div>
            </div>
        );
    }
    else
    {
        return (
           <div>
                <div className="toggle" onClick={showMenu}>
                    <div></div>
                    <div></div>
                </div>

                <div className={menu}>
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

export default Lesson;