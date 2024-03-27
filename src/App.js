import './App.css';
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

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
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path='/users' element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
