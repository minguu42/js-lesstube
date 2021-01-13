import {useEffect} from 'react';
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

    useEffect(() => {
        fetchYouTubeVideos('sample').then((data) => {
            console.log(data.items);
        });
    }, []);

    return (
        <div className="app">
            <NavigationDrawer/>
            <div className="main">
                <AppBar/>
                <Switch>
                    <Route exact path="/">
                        <SearchForm/>
                        <VideoList/>
                    </Route>
                    <Route path="/watch">
                        <VideoFlame/>
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
