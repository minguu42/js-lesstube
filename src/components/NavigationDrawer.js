import {MdVideoLabel} from 'react-icons/md';
import '../universe.css';
import './NavigationDrawer.css';
import {Link} from "react-router-dom";

const NavigationDrawer = (props) => {
    const nowWatchVideos = props.nowWatchVideos;
    const onNowWatchCardDeleteClick = props.onNowWatchCardDeleteClick
    if (!nowWatchVideos.length) {
        return (
            <div className="navigation-drawer">
                <div className="navigation-drawer__header">
                    <MdVideoLabel/>
                    <h5 className="nd-header__text">今から見る</h5>
                </div>
                <div className="navigation-drawer__inner">
                    <p className="navigation-drawer__message">今から見る動画はありません</p>
                </div>
            </div>
        );
    }

    return (
        <div className="navigation-drawer">
            <div className="navigation-drawer__header">
                <MdVideoLabel/>
                <h5 className="nd-header__text">今から見る</h5>
            </div>
            <div className="navigation-drawer__inner">
                {nowWatchVideos.map((video, index) => {
                    return (
                        <div className="nd-card">
                            <img
                                src={video.snippet.thumbnails.high.url}
                                alt={'thumbnail of ' + video.snippet.title}
                                width="240px"
                                height="136px"
                            />
                            <p className="nd-card__heading">{video.snippet.title}</p>
                            <button className="nd-card__button" onClick={() => {
                                onNowWatchCardDeleteClick(index);
                            }}>
                                削除
                            </button>
                        </div>
                    );
                })}
                <Link to="/watch" className="navigation-drawer__now-watch-button">見始める</Link>
            </div>
        </div>
    );
};

export default NavigationDrawer;
