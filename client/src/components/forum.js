import React, {useEffect, useState} from 'react';
import Disqus from 'disqus-react';
import "../style/forum.css";

const Forum = props => {

    const [id, idChange] = useState("");
    // const [url, urlChange] = useState("");
    let url = window.location.href;

    useEffect(() => {
        // Obtaining article id for display
        if(id === "")
        {
            console.log("id is empty")
            idChange(props.id);
            // urlChange(`https://pacific-taiga-25458.herokuapp.com/`);
        }
    }, [id, props.id]);

    // disqus setup
    const disqusShortname = "tsugi-1";
    const disqusConfig = {
      url: url,
      identifier: id,
      title: "OnlineSuccess",
      language: 'en_US'
    }

    return(
        (id === "") ? <div>Loading</div> :
        <div className={`forum-cover ${props.cforum}`}>
            <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}

export default Forum;