import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    ContactPhoneOutlined,
    ShareOutlined,
    PersonAdd
} from '@material-ui/icons';
import Spacer from '../Spacer';

const NavBar = () =>
    <AppBar position="fixed">
        <Toolbar>
            <Tooltip title="Info" placement="bottom">
                <IconButton color="inherit">
                    <ContactPhoneOutlined />
                </IconButton>
            </Tooltip>
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

export default NavBar;