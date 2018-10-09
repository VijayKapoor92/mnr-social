import React, {Component} from 'react';
import classNames from 'classnames';
import {TextField , InputAdornment} from '@material-ui/core';
import {Business, Search} from '@material-ui/icons';
import styles from './jscss';
import {withStyles} from '@material-ui/core/styles';

const InputProps = classes => ({
    disableUnderline: true,
    startAdornment: (
        <InputAdornment position="start">
            <Business className={classes['icon-default']}/>
        </InputAdornment>
    ),
    endAdornment: (
        <InputAdornment position="end">
            <Search className={classes['icon-default']}/>
        </InputAdornment>
    )
});

export default withStyles(styles)(
    class SuggestionField extends Component {
        constructor(props){
            super(props);
            this.state = {
                hover: false,
                focus: false
            }
        }

        handleFocus = () =>
            this.setState({ focus: true });

        handleBlur = () =>
            this.setState({ focus: false});

        handleMouseOver = () =>
            this.setState({ hover: true});

        handleMouseLeave = () =>
            this.setState({ hover: false});

        render() {
            const { classes } = this.props;
            const { hover, focus } = this.state;
            return (
                <TextField
                    InputProps={InputProps(classes)}
                    className={classNames(
                        classes.textfield,
                        hover && classes['textfield-hover'],
                        focus && classes['textfield-focus']
                    )}
                    onFocus={() => this.handleFocus()}
                    onBlur={() => this.handleBlur()}
                    onMouseOver={() => this.handleMouseOver()}
                    onMouseLeave={() => this.handleMouseLeave()}
                />
            )
        }
    }
);