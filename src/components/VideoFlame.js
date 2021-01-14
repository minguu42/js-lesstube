import {useState} from 'react';
import {Redirect} from "react-router";

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
    console.log(nowVideo);
    return (
        <div className="video-flame__outer">
            <iframe
                title="video player"
                width="1120px"
                height="630px"
                src="https://www.youtube.com/embed/MlPxDmG4VHE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <h2 className="video-flame__title">{nowVideo.snippet.title}</h2>
        </div>
    );
};

export default VideoFlame;
