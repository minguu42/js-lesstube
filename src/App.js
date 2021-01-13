import AppBar from './components/AppBar';
import NavigationDrawer from "./components/NavigationDrawer";
import VideoList from "./components/VideoList";

import './App.css';
import SearchForm from "./components/SearchForm";
import {Redirect, Route, Switch} from "react-router";

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
                        <h2>動画再生ページ</h2>
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
