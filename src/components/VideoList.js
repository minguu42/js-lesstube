import './VideoList.css';

const VideoList = (props) => {
    const videos = props.videos;

    if (videos === null) {
        return (
            <div className="dev-back-c video-list">
                Now loading ...
            </div>
        );
    }
    console.log(videos);
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
                        <p className="video-card__description">{video.snippet.description}</p>
                        <button className="video-card__button">今から見る</button>
                    </div>
                );
            })}
            <div className="video-card">
                <img className="video-card__thumbnail" src="http://placehold.jp/332x186.png" alt="動画サンプル"/>
                <h4 className="video-card__title">動画タイトル</h4>
                <p className="video-card__description">概要ああああああああああああああああああ</p>
                <button className="video-card__button">今から見る</button>
            </div>
        </div>
    );
};

export default VideoList;
