import React, {useState} from 'react';
import Forum from './forum';
import Video from './video';
import Quiz from './quiz';

const VideoForum = () => {

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
            </div>

            <div className="video-forum">
                <Video />
                <Forum cforum={cforum} />
                <Quiz cquiz={cquiz} />
            </div>

        </div>

    );
}

export default VideoForum;