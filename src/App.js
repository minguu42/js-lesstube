import {useState, useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router";

import {fetchYouTubeVideos} from './api';

import AppBar from './components/AppBar';
import NavigationDrawer from "./components/NavigationDrawer";
import VideoList from "./components/VideoList";
import SearchForm from "./components/SearchForm";
import VideoFlame from "./components/VideoFlame";
import ThankYouPage from "./components/ThankYouPage";

import './App.css';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [nowWatchVideos, setNowWatchVideos] = useState([]);

    useEffect(() => {
        fetchYouTubeVideos('ヒカキン').then((data) => {
            setVideos(data.items);
        });
    }, []);

    const reloadVideos = (keyword) => {
        fetchYouTubeVideos(keyword).then((data) => {
            setVideos(data.items);
        });
    };

    const handleVideoCardClick = (video) => {
        const tmp = nowWatchVideos.slice();
        tmp.push(video);
        setNowWatchVideos(tmp);
    };

    const handleNowWatchCardDeleteClick = (index) => {
        const tmp = nowWatchVideos.slice();
        tmp.splice(index, 1);
        setNowWatchVideos(tmp);
    };

    return (
        <div className="app">
            <NavigationDrawer
                nowWatchVideos={nowWatchVideos}
                onNowWatchCardDeleteClick={handleNowWatchCardDeleteClick}
            />
            <div className="main">
                <AppBar/>
                <Switch>
                    <Route exact path="/">
                        <SearchForm onFormSubmit={reloadVideos}/>
                        <VideoList videos={videos} onVideoCardClick={handleVideoCardClick}/>
                    </Route>
                    <Route path="/watch">
                        <VideoFlame nowWatchVideos={nowWatchVideos}/>
                    </Route>
                    <Route path="/thank">
                        <ThankYouPage/>
                    </Route>
                    <Redirect push to="/"/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
