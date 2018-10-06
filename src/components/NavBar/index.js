import React from 'react';
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
import ToggleIcon from 'material-ui-toggle-icon';
import Spacer from '../Spacer';
import {MNR_LOGO} from "../../constants";
import {withStyles} from '@material-ui/core/styles';
import styles from './jscss';

const NavBar = ({classes}) =>
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Tooltip title="Info" placement="bottom">
                <IconButton color="inherit">
                    <ContactPhone />
                </IconButton>
            </Tooltip>
            <img src={MNR_LOGO} alt="logo" className={classes.logo}/>
            <Spacer />
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
        </Toolbar>
    </AppBar>
;

export default withStyles(styles)(NavBar);