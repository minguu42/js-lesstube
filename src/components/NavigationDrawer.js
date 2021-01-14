import {MdVideoLabel} from 'react-icons/md';
import '../universe.css';
import './NavigationDrawer.css';

const NavigationDrawer = (props) => {
    const nowWatchVideos = props.nowWatchVideos;
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
                {console.log(nowWatchVideos)}
                {console.log(nowWatchVideos[0])}
                {nowWatchVideos.map((video) => {
                    return (
                        <div className="nd-card">
                            <img
                                 src={video.snippet.thumbnails.high.url}
                                 alt={'thumbnail of ' + video.snippet.title}
                                 width="240px"
                                 height="136px"
                            />
                            <p className="nd-card__heading">{video.snippet.title}</p>
                            <button className="nd-card__button">削除</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigationDrawer;
