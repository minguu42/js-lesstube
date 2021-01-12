import '../universe.css';
import './AppBar.css';
import {MdMenu} from 'react-icons/md';

const AppBar = () => {
    return (
        <header className="header">
            <MdMenu size="24px" className="header__menu"/>
            <h2 className="header__logo">LessTube</h2>
        </header>
    );
};

export default AppBar;
