import React from 'react';
import ReactPlayer from 'react-player';
import '../style/admin.css';

const Admin = () => {

    return (
        <div>
            Admin page
            
            <div className='admin-cover'>
                {/* Lecture Video */}
                <div className='create-video'>
                    <input type='text' placeholder='Lecture video YouTube link'/>
                    <ReactPlayer controls
                    width="95%" height="75%" style={{margin: '0 auto'}}
                    // url="https://www.youtube.com/watch?v=O6P86uwfdR0" />
                    url="https://www.youtube.com/watch?v=lIlMtVGI5Pg" />
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