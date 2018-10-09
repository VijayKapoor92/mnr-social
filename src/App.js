import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            iconInfoOn: false,
            focusSuggestionsField: false,
            hoverSuggestionsField: false,
            blurSuggestionsField: false
        }
    }

    handleIconOnOff = () =>
        this.setState({iconInfoOn: !this.state.iconInfoOn});

    handleFocusSuggestionField = focus =>
        this.setState({focusSuggestionsField: focus});

    /*handleBlurSuggestionsField = blur =>
        this.setState({blurSuggestionsField: blur});*/

    handleMouseLeaveSuggestionsField = () =>
        this.setState({hoverSuggestionsField: false});

    handleMouseOverSuggestionsField = () =>
        this.setState({hoverSuggestionsField: true});

    render() {
        const { iconInfoOn, focusSuggestionsField, hoverSuggestionsField } = this.state;

        return (
            <NavBar
                onChangeIcon={this.handleIconOnOff}
                iconInfoOn={iconInfoOn}
                onFocusSuggestionField={this.handleFocusSuggestionField}
                onBlurSuggestionsField={this.handleFocusSuggestionField}
                focusSuggestionsField={focusSuggestionsField}
                onMouseOverSuggestionsField={this.handleMouseOverSuggestionsField}
                onMouseLeaveSuggestionsField={this.handleMouseLeaveSuggestionsField}
                hoverSuggestionsField={hoverSuggestionsField}
            />
        )
    }
}

export default App;
