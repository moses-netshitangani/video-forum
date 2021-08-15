import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import Button from './button';
import "../style/video.css";

const Video = () => {

    const b = useRef(null);

    const getElapsed = () => {
        alert(b.current.getCurrentTime());
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