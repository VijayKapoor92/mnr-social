import React from 'react';
import classNames from 'classnames';
import {
    AppBar,
    Toolbar,
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    ContactPhone,
    ShareOutlined,
    PersonAdd
} from '@material-ui/icons';
import SuggestionsField from '../SuggestionField';
import {MNR_NO_LOGO} from "../../constants";
import {
    MNR_CADASTRO_COMPRADOR_CONCESSIONARIAS,
    MNR_CADASTRO_COMPRADOR_EMPRESAS, MNR_CADASTRO_FORNECEDOR, MNR_LOGO,
    MNR_NO_LOGO
} from "../../utils/constants";
import {withStyles} from '@material-ui/core/styles';
import styles from './jscss';

const NavBar = ({classes, onChangeIcon, onFocusSuggestionField, onBlurSuggestionsField, focusSuggestionsField, onMouseOverSuggestionsField, onMouseLeaveSuggestionsField, hoverSuggestionsField}) =>
    <AppBar position="fixed" className={classes['app-bar']}>
        <Toolbar className={classes.toolbar}>
            <div className={classes['app-bar-left']}>
                <Tooltip title="Info" placement="bottom">
                    <IconButton color="inherit" onClick={() => onChangeIcon()}>
                        <ContactPhone/>
                    </IconButton>
                </Tooltip>
                <img src={MNR_NO_LOGO} alt="logo" className={classNames(classes.logo, MNR_NO_LOGO && classes['no-logo'])}/>
            </div>
            <div className={classes['app-bar-center']}>
                <SuggestionsField
                    onFocusSuggestionField={onFocusSuggestionField}
                    onBlurSuggestionsField={onBlurSuggestionsField}
                    onMouseOverSuggestionsField={onMouseOverSuggestionsField}
                    onMouseLeaveSuggestionsField={onMouseLeaveSuggestionsField}
                    focus={focusSuggestionsField}
                    hover={hoverSuggestionsField}
                />
            </div>
            <div className={classes['app-bar-right']}>
                <Tooltip title="Compartilhe sua página" placement="bottom">
                    <IconButton color="inherit">
                        <ShareOutlined/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Cadastre-se" placement="bottom">
                    <IconButton color="inherit">
                        <PersonAdd/>
                    </IconButton>
                </Tooltip>
            </div>
        </Toolbar>
    </AppBar>
;

export default withStyles(styles)(NavBar);