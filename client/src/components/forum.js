import React, {useEffect, useState} from 'react';
import Disqus from 'disqus-react';
import "../style/forum.css";

const Forum = props => {

    const [id, idChange] = useState("");

    useEffect(() => {
        // Obtaining article id for display
        if(id === "")
            idChange(props.id);
    }, [id, props.id]);

    // disqus setup
    const disqusShortname = "tsugi-1";
    const disqusConfig = {
      url: "https://pacific-taiga-25458.herokuapp.com/#!newthread",
      identifier: `${id}`,
      title: "OnlineSuccess",
      language: 'en_US'
    }

    return(
        <div className={`forum-cover ${props.cforum}`}>
            <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
            
        </div>
    )
}

export default Forum;