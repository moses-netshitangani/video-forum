import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import '../style/admin.css';

const Admin = () => {

    const [url, OnUrl] = useState("https://");

    const fetchVid = link => {
        console.log(link.target)
    }

    const getLink = () => {
        OnUrl(document.getElementById('link').value);
    }

    return (
        <div>
            Admin page
            
            <div className='admin-cover'>
                {/* Lecture Video */}
                <div className='create-video'>

                    <div id='submit-link'>
                        <input type='text' id='link' placeholder='Lecture video YouTube link'/>
                        <div onClick={getLink}>Submit link</div>
                    </div>

                    <ReactPlayer controls
                    width="95%" height="75%" style={{margin: '0 auto'}}
                    // url="https://www.youtube.com/watch?v=O6P86uwfdR0" />
                    url={url} />

                </div>

                {/* Create Quiz */}
                <div className="create-cover">

                    <div className='quiz-template'>
                        <input type='text' placeholder='Type in quiz question' id='q' />
                        <input type='text' placeholder='Option A' />
                        <input type='text' placeholder='Option B' />
                        <input type='text' placeholder='Option C' />
                        <input type='text' placeholder='Option D' />
                    </div>

                    <div>
                        Create Quiz
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Admin;