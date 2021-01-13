import AppBar from './components/AppBar';
import NavigationDrawer from "./components/NavigationDrawer";
import VideoList from "./components/VideoList";

import './App.css';
import SearchForm from "./components/SearchForm";

const App = () => {
    return (
        <div className="app">
            <NavigationDrawer/>
            <div className="main">
                <AppBar/>
                <SearchForm/>
                <VideoList/>
            </div>
        </div>
    );
};

export default App;
