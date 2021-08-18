import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './button';
import "../style/video.css";

const Video = () => {

    // time elapsed
    let time = 0;
    let timeString = "";

    // ref to access the ReactPlayer
    const b = useRef(null);

    // for quiz component
    // to control when to pause and take quiz
    const [play, onPlayChange] = useState(true);

    // for quiz component
    // onProgress test
    let oP = e => {
        if(Math.floor(e.playedSeconds) === 7000)
            onPlayChange(false);
        else
        {
            if(!play)
                onPlayChange(true);
        }
    }

    // process the time elapsed
    const processTime = t => {
        // minutes
        let mins = Math.floor(t/60);
        if(mins < 10)
        {
            mins = `0${mins}`
        }

        // seconds
        let secs = (t % 60);
        if(secs < 10.0)
        {
            secs = `0${secs.toString().substring(0,1)}`;
        }else
        {
            secs = secs.toString().substring(0,2);
        }

        // time
        timeString = `[${mins}:${secs}]`;
    }

    // get time elapsed
    const getElapsed = () => {
        time = b.current.getCurrentTime();
        processTime(time);
        return timeString;
    }

    return(
        <div className="video-cover">
            <ReactPlayer ref={b} className="player" controls
            width="100%" height="100%" style={{margin: '0 auto'}}
            onProgress={e => {oP(e)}} playing={play} loop
            // url="https://www.youtube.com/watch?v=O6P86uwfdR0" />
            url="https://www.youtube.com/watch?v=YvkHPdsjQQs" />

            <CopyToClipboard text={() => {getElapsed()}} onCopy={e => alert(e)}>
                {/* <Button onClick={getElapsed} /> */}
                <span>Shoot</span>
            </CopyToClipboard>
        </div>

        


    );
}

export default Video;