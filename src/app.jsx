import React, { Component } from 'react';
import Greeting from './greeting';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            name: '',
            reply: ''
        };
    }

    nameHandler = (event) => {
        const name = event.target.value;
        console.log('In Component App, method nameHandler, name: ', name);
        this.setState({ name });
        this.sendPostMessage({ name });
    }

    receiveMessage = (event) => {
        console.log('In Component App, method receiveMessage, origin: ', event.origin);
        if(event.origin !== "http://localhost:5500")
            return
        console.log('In Component App, method receiveMessage, data: ', event.data)
        const { reply } = JSON.parse(event.data);
        console.log('In Component App, method receiveMessage, reply: ', reply)
        if(reply) {
            this.setState({ reply });
        }
    }

    sendPostMessage = (message) => {
        global.parent.postMessage(JSON.stringify(message), 'http://localhost:5500'); 
    }

    componentDidMount() {
        console.log('In Component App, method componentDidMount')
        global.addEventListener('message', this.receiveMessage, false)
    }

    render() {
        return <Greeting nameHandler={this.nameHandler} reply={this.state.reply}/>;
    }
}