import {Redirect} from "react-router";
import YouTube from "react-youtube";

import './VideoFlame.css';

const VideoFlame = (props) => {
    const nowWatchVideos = props.nowWatchVideos;
    const removeNowWatchVideo = props.removeNowWatchVideo;

    const onEnd = () => {
        removeNowWatchVideo();
    };

    if (!nowWatchVideos.length) {
        return (
            <Redirect to="/thank"/>
        );
    }

    const nowVideo = nowWatchVideos[0];
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
