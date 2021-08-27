import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './button';
import "../style/video.css";

const Video = props => {

    // time elapsed
    let time = 0;
    let timeString = "";
    let secnds = 0;

    // ref to access the ReactPlayer
    const b = useRef(null);

    // seek back to quiz
    const seekBack = () => {
        b.current.seekTo(secnds, 'seconds');
    }

    // convert time to raw seconds
    const rawSec = e => 
    {
        let secs = parseInt(e.substring(4,6));
        let mins = parseInt(e.substring(1,3));

        for(let i = 0; i < mins; i++)
        {
            secs += 60;
        }   
        secnds = secs;
    }

    // for quiz component
    // to control when to pause and take quiz
    const [play, onPlayChange] = useState(false);

    let oP = e => {
        rawSec(`[${props.time}]`);
        if(Math.floor(e.playedSeconds) >= secnds)
        {
            onPlayChange(false);
            seekBack();
            props.foc('q');
        }
        else
        {
            if(e.playedSeconds >= 1)
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
        alert(timeString);
    }

    return(
        <div className="video-cover">
            <ReactPlayer ref={b} className="player" controls
            width="100%" height="100%" style={{margin: '0 auto'}}
            onProgress={e => {oP(e)}} playing={play}
            // {/*onProgress={e => {oP(e)}} playing={play} loop */}
            url={props.link} />

            {/* <CopyToClipboard text={timeString} onCopy={e => alert(e)}> */}
                <Button onClick={getElapsed} />
            {/* </CopyToClipboard> */}
        </div>

    );
}

export default Video;