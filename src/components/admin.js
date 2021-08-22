import React, {useState, useRef} from 'react';
import ReactPlayer from 'react-player';
import '../style/admin.css';

const Admin = () => {

    // ref to access the ReactPlayer
    const player = useRef(null);

    // get video length
    const [len, changeLen] = useState('0');


    const [url, OnUrl] = useState("https://");

    const fetchVid = link => {
        console.log(link.target)
    }

    const getLink = () => {
        OnUrl(document.getElementById('link').value);
        changeLen(`${player.current.getDuration()}`);
    }

    return (
        <div>
            <h3>Admin Page</h3>
            
            <div className='admin-cover'>
                {/* Lecture Video */}
                <div className='create-video'>

                    <div id='submit-link'>
                        <input type='text' id='link' placeholder='Lecture video YouTube link'/>
                        <div onClick={getLink} className='button-cover c'>Link Video</div>
                    </div>

                    <ReactPlayer controls ref={player} width="95%"
                     height="75%" style={{margin: '0 auto'}} url={url} />

                </div>

                {/* Create Quiz */}
                <div className="create-cover">

                    <div className='quiz-template'>
                        <input type='text' placeholder='Type in quiz question' id='q' />
                        <input type='text' placeholder='Option A' />
                        <input type='text' placeholder='Option B' />
                        <input type='text' placeholder='Option C' />
                        <input type='text' placeholder='Option D' />
                        <input type='text' placeholder='Correct Option' />
                        <input type='text' placeholder='Time in [mm:ss] format' id='t' required />
                    </div>
                    
                    <div className="button-cover c">
                        Create Quiz
                    </div>

                </div>
                
            </div>
            
        </div>
    );
}

export default Admin;