import React, {useEffect, useState} from 'react';
import Disqus from 'disqus-react';
import "../style/forum.css";

const Forum = props => {

    const [id, idChange] = useState("");
    const [url, urlChange] = useState("");
    // let url = window.location.href;

    useEffect(() => {
        // Obtaining article id for display
        if(id === "")
        {
            let tempId = props.id;
            let tempURL = `https://pacific-taiga-25458.herokuapp.com/${tempId}`;
            idChange(tempId);
            urlChange(tempURL);
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
            <h3>{id}</h3>
            <h4>{url}</h4>
        </div>
    )
}

export default Forum;