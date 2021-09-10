import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import "../style/video.css";

const Video = props => {

    // time elapsed
    let time = 0;
    let secnds = 0;
    const [timeString, onTimeString] = useState("");

    // ref to access the ReactPlayer
    const b = useRef(null);

    // to control when to pause and take quiz
    const [play, onPlayChange] = useState(false);

    useEffect(() => {
        if(props.done === "yes")
            onPlayChange(true);
    }, [props.done]);

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

    

    let pauseVideo = e => {

        if(!props.skip)
        {
             // update time string - updates time stamp
            getElapsed();

            // convert quiz time to seconds and then compare
            rawSec(`[${props.time}]`);
            if(Math.floor(e.playedSeconds) >= secnds)
            {
                onPlayChange(false);
                seekBack();
                props.foc('q');
                props.onLock('false');
            }
            else
            {
                props.onLock('lock');
                if(e.playedSeconds >= 1)
                    onPlayChange(true);
            }
        }
        else
        {
            props.onLock('lock');
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
        let ts = `[${mins}:${secs}]`;
        onTimeString(`[${mins}:${secs}]`);
        props.onTimeString(ts);
    }

    // get time elapsed
    const getElapsed = () => {
        time = b.current.getCurrentTime();
        processTime(time);
    }

    return(
        <div className="video-cover">
            {/* video player */}
            <ReactPlayer ref={b} className="player" controls
            width="100%" height="100%" style={{margin: '0 auto'}}
            onProgress={e => {pauseVideo(e)}} playing={play}
            url={props.link} />
        </div>

    );
}

export default Video;