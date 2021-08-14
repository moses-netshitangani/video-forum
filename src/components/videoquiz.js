import React from 'react';
import Video from './video';
import Quiz from './quiz';

const VideoQuiz = () => {

    return (
        <div>
            <div>
             <h2>
                Mandatory Quiz Component
             </h2>
            </div>

            <div className="video-quiz video-forum">
                <Video />
                <Quiz />
            </div>
        </div>

    );
}

export default VideoQuiz;