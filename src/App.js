import AppBar from './components/AppBar';
import NavigationDrawer from "./components/NavigationDrawer";
import VideoList from "./components/VideoList";

import './App.css';

const App = () => {
    return (
        <div className="app">
            <NavigationDrawer/>
            <div className="main">
                <AppBar/>
                <VideoList/>
            </div>
        </div>
    );
};

export default App;
