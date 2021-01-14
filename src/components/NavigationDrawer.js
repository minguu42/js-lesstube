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
                <div className="nd-card">
                    <img src="http://placehold.jp/240x136.png" alt="ダミー画像"/>
                    <p className="nd-card__heading">動画タイトル</p>
                    <button className="nd-card__button">削除</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationDrawer;
