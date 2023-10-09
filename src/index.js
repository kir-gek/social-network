import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hey, how are you?', likeCount: 2},
    {id: 2, message: "It's my first post", likeCount: 13},
    {id: 2, message: "It's my first post", likeCount: 13},
    {id: 2, message: "It's my first post", likeCount: 13}
];
let dialogsData = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Marina'},
    {id: 4, name: 'John'},
    {id: 5, name: 'Bob'}
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello? how are you?'},
    {id: 3, message: 'Hello? how are you?'},
    {id: 4, message: 'YO'},
    {id: 5, message: 'YO'},
    {id: 6, message: 'YO'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts = {posts} messages={messages} dialogsData={dialogsData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
