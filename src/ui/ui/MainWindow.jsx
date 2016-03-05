import React from 'react';
import ipc from 'ipc';

export const MainWindow = React.createClass({
    getInitialState: function() {
        return {
            message: 'Started'
        };
    },
    componentDidMount: function() {
        ipc.on('ping', (message) => {
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
