import React, {Component} from 'react';
import classNames from 'classnames';
import {TextField , InputAdornment, CircularProgress} from '@material-ui/core';
import Business from '@material-ui/icons/Business';
import styles from './jscss';
import {withStyles} from '@material-ui/core/styles';

import {suggestions} from '../../utils/suggestions';
import Suggestions from '../Suggestions';

export default withStyles(styles)(
    class SuggestionField extends Component {
        constructor(props){
            super(props);
            this.state = {
                hover: false,
                focus: false,
                typing: false,
                query: '',
                suggestions: []
            }
        }

        handleFocus = () =>
            this.setState({ focus: true });

        handleBlur = () =>
            this.setState({
                focus: false,
                typing: false
            });

        handleMouseOver = () =>
            this.setState({ hover: true});

        handleMouseLeave = () =>
            this.setState({ hover: false});

        handleChange = e => {
            if (e.target.value.length === 0) {
                this.setState({
                    query: e.target.value,
                    typing: false
                });
                return;
            }

            this.setState({
                query: e.target.value,
                typing: true
            });

            if (e.target.value.length > 0)
                this.getSuggestions();
        };

        getSuggestions = () =>
            setTimeout(() =>
                this.setState({ suggestions: suggestions})
            , 1000);

        render() {
            const { classes } = this.props;
            const { hover, focus, typing, query, suggestions } = this.state;
            const InputProps = {
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment position="start">
                        <Business className={classNames(classes.icon, !typing && classes['icon-default'], typing && classes['icon-dark-grey'])}/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end" className={classNames(classes['loader-out'], typing && classes['loader-in'])}>
                        <CircularProgress className={classes['icon-default']} size={20}/>
                    </InputAdornment>
                )
            };
            return (
                <div className={classes.root}>
                    <TextField
                        InputProps={InputProps}
                        className={classNames(
                            classes.textfield,
                            hover && classes['textfield-hover'],
                            focus && classes['textfield-focus']
                        )}
                        placeholder="Procure por empresas..."
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onMouseOver={this.handleMouseOver}
                        onMouseLeave={this.handleMouseLeave}
                        onChange={this.handleChange}
                    />
                    <Suggestions
                        query={query}
                        focus={focus}
                        suggestions={suggestions}
                    />
                </div>
            )
        }
    }
);