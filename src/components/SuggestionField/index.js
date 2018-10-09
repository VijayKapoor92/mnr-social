import React from 'react';
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

const SuggestionsField = ({classes, onFocusSuggestionField, onBlurSuggestionsField, onMouseOverSuggestionsField, onMouseLeaveSuggestionsField, focus, hover}) =>
    <TextField
        InputProps={InputProps(classes)}
        className={classNames(
            classes.textfield,
            hover && classes['textfield-hover'],
            focus && classes['textfield-focus']
        )}
        onFocus={() => onFocusSuggestionField(true)}
        onBlur={() => onFocusSuggestionField(false)}
        onMouseOver={() => onMouseOverSuggestionsField()}
        onMouseLeave={() => onMouseLeaveSuggestionsField()}
    />
;

export default withStyles(styles)(SuggestionsField);