import React, {useEffect} from 'react';
import "../style/forum.css";

const Forum = props => {

    let url = "";
    let id = "";

    useEffect(() => {
        // Obtaining article id for display
        url = window.location.href;
        id = "k5778dds";   // for testing purposes
    }, []);

    let disqus_config = () => {
        this.page.url = url;
        this.page.identifier = id;
    };

    (function () {
        var d = document, s = d.createElement('script');
        s.src = 'https://vascomedia.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    return(
        <div className={`forum-cover ${props.cforum}`}>
            <div id="disqus_thread"></div>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    )
}

export default Forum;