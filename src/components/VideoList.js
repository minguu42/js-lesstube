import './VideoList.css';

const VideoList = (props) => {
    const videos = props.videos;

    const handleClick = (event) => {
        event.preventDefault();
        props.onVideoCardClick(event.target.value);
    };

    if (!videos.length) {
        return (
            <div className="dev-back-c video-list">
                Now loading ...
            </div>
        );
    }
    return (
        <div className="dev-back-c video-list">
            {videos.map(video => {
                return (
                    <div className="video-card" key={video.etag}>
                        <img className="video-card__thumbnail"
                             src={video.snippet.thumbnails.high.url}
                             alt={'thumbnail of ' + video.snippet.title}
                             width="332px"
                             height="186px"
                        />
                        <h4 className="video-card__title">{video.snippet.title}</h4>
                        <p className="video-card__channel-title">{video.snippet.channelTitle}</p>
                        <button
                            className="video-card__button"
                            onClick={handleClick}
                            name="button"
                            value={video}
                        >
                            今から見る
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default VideoList;
