import React from 'react';
import {ipcRenderer} from 'electron';

export const MainWindow = React.createClass({
    getInitialState: function() {
        return {
            message: 'Started'
        };
    },
    componentDidMount: function() {
        ipcRenderer.on('ping', (event, message) => {
            this.setState({message});
        });
    },
    render: function() {
        return (
            <div className="mainWindow">
                <div>This is the Main Window.</div>
                <div>The current message is: {this.state.message}</div>
            </div>
        );
    }
});
