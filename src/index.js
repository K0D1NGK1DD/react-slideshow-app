import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const SLIDES = [
    {
        title: "Slideshow",
        text: "Slideshow example."
    },
    {
        title: "Test",
        text: "This is a test."
    },
    {
        title: "React",
        text: "Powered by React"
    },
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
registerServiceWorker();
