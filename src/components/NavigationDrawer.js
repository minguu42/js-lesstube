import {MdVideoLabel} from 'react-icons/md';
import '../universe.css';
import './NavigationDrawer.css';

const NavigationDrawer = () => {
    return (
        <div className="navigation-drawer">
            <div className="navigation-drawer__header">
                <MdVideoLabel/>
                <h5 className="nd-header__text">今から見る</h5>
            </div>
            <div className="navigation-drawer__inner">
                <div className="nd-card">
                    <img src="http://placehold.jp/240x136.png" alt="ダミー画像"/>
                </div>
            </div>
        </div>
    );
};

export default NavigationDrawer;
