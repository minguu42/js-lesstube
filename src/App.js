import AppBar from './components/AppBar';
import NavigationDrawer from "./components/NavigationDrawer";

import './App.css';

const App = () => {
    return (
        <div className="app">
            <NavigationDrawer/>
            <div className="main">
                <AppBar/>
                <h1>Hello, React!</h1>
            </div>
        </div>
    );
};

export default App;
