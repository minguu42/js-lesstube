import './VideoFlame.css';

const VideoFlame = () => {
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
            <h2 className="video-flame__title">動画タイトル</h2>
        </div>
    );
};

export default VideoFlame;
