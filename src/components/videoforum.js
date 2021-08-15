import React, {useState} from 'react';
import Forum from './forum';
import Video from './video';
import Quiz from './quiz';

const VideoForum = () => {

    let [cforum, changeCforum] = useState("show");
    let [cquiz, changeCquiz] = useState("hide");

    let swap = () => {
        if(cforum === "show")
        {
            changeCforum("hide");
            changeCquiz("show");    
        }else
        {
            changeCforum("show");
            changeCquiz("hide");  
        }
    }

    return(

        <div>
            <div className="next" onClick={swap}></div>

            <div>
                <h2 style={{margin: '1em 0 2em 0'}}>
                    Lecture-Video Forum Component
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