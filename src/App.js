import AppBar from './components/AppBar';
import {Redirect, Route, Switch} from "react-router";

import NavigationDrawer from "./components/NavigationDrawer";
import VideoList from "./components/VideoList";
import SearchForm from "./components/SearchForm";
import VideoFlame from "./components/VideoFlame";

import './App.css';

const App = () => {
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
                        <h2>ThankYouページ</h2>
                    </Route>
                    <Redirect push to="/"/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
