import {MainWindow} from './ui/MainWindow';
import ReactDOM from 'react-dom';
import React from 'react';

function start() {
    ReactDOM.render(
        <MainWindow />,
        document.getElementById('Application')
    );
}
