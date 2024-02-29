import './App.css';
import {render} from '@testing-library/react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Routes, Route} from "react-router-dom";


const News = () => {
    return <div>News</div>;
}

const Music = () => {
    return (
        <div>Music</div>
    );
}

const Settings = () => {
    return <div>Settings</div>;
}

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
