import React from 'react';
import ReactPlayer from 'react-player';
import "../style/video.css";

const Video = () => {

    return(
        <div className="video-cover">
            Lecture video goes here
            <ReactPlayer className="player" controls
            width="100%" height="90%"
            url="https://www.youtube.com/watch?v=I2wURDqiXdM&t=3s" />
            {/* <video src="Py.mp4" controls width="500px" height="500px">
                <source src="Py.mp4" type="video/mp4" />
            </video> */}
        </div>
    );
}

export default Video;