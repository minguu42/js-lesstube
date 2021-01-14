import {useState} from 'react';
import {Redirect} from "react-router";
import YouTube from "react-youtube";

import './VideoFlame.css';

const VideoFlame = (props) => {
    const nowWatchVideos = props.nowWatchVideos;
    const [nowVideos, setNowVideos] = useState(nowWatchVideos);

    const onEnd = () => {
        const tmp = nowVideos.slice();
        tmp.splice(0, 1);
        setNowVideos(tmp);
    };

    if (!nowVideos.length) {
        return (
            <Redirect to="/thank"/>
        );
    }

    const nowVideo = nowVideos[0];
    const opts = {
        width: '1120px',
        height: '630px',
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <div className="video-flame__outer">
            <YouTube videoId={nowVideo.id.videoId} opts={opts} onEnd={onEnd}/>
            <h2 className="video-flame__title">{nowVideo.snippet.title}</h2>
        </div>
    );
};

export default VideoFlame;
