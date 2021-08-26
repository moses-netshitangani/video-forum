import React, {useEffect} from 'react';
import Disqus from 'disqus-react';
import "../style/forum.css";

const Forum = props => {

    let url = "";
    let id = "";

    useEffect(() => {
        // Obtaining article id for display
        url = `${window.location.href}#!newthread`;
        console.log(url)
        id = "k5778dds";
    }, []);

    // 

    const disqusShortname = "tsugi";
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "OnlineSuccess",
      language: 'en_US'
    }

    // 

    let disqus_config = () => {
        this.page.url = url;
        this.page.identifier = id;

        this.callbacks.onNewComment = [function(comment) {
            alert(comment.id);
            alert(comment.text);
      }];
    };

    (function () {
        var d = document, s = d.createElement('script');
        s.src = 'https:/vascomedia.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    // Disqus Reset Function
    // let reset = function (newIdentifier, newUrl, newTitle, newLanguage) {
    //     DISQUS.reset({
    //         reload: true,
    //         config: function () {
    //             this.page.identifier = newIdentifier;
    //             this.page.url = newUrl;
    //             this.page.title = newTitle;
    //             this.language = newLanguage;
    //         }
    //     });
    // };


    return(
        <div className={`forum-cover ${props.cforum}`}>
            <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
            />
            {/* <div id="disqus_thread"></div> */}
            {/* <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */}
            
        </div>
    )
}

export default Forum;