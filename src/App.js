import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            iconInfoOn: false
        }
    }

    handleIconOnOff = () =>
        this.setState({iconInfoOn: !this.state.iconInfoOn});

    render() {
        const { iconInfoOn } = this.state;

        return (
            <NavBar
                onChangeIcon={this.handleIconOnOff}
                iconInfoOn={iconInfoOn}
            />
        )
    }
}

export default App;
