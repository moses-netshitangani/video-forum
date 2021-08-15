import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import Button from './button';
import "../style/video.css";

const Video = () => {

    // time elapsed
    let time = 0;
    let timeString = "";

    // ref to access the ReactPlayer
    const b = useRef(null);

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
            width="100%" height="90%"
            url="https://www.youtube.com/watch?v=I2wURDqiXdM&t=3s" />
            
            <Button onClick={getElapsed} />
        </div>


    );
}

export default Video;