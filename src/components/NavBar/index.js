import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import {
    AppBar,
    Toolbar,
    IconButton,
    Tooltip,
    Popover,
    Typography,
    TextField,
    InputAdornment,
    Button
} from '@material-ui/core';
import {
    Language,
    ShareOutlined,
    PersonAdd,
    Send
} from '@material-ui/icons';
import SuggestionsField from '../SuggestionField';
import PopoverShare from '../PopoverShare';
import PopoverSignUp from '../PopoverSignUp';
import {
    MNR_CADASTRO_COMPRADOR_CONCESSIONARIAS,
    MNR_CADASTRO_COMPRADOR_EMPRESAS, MNR_CADASTRO_FORNECEDOR, MNR_LOGO,
    MNR_NO_LOGO
} from "../../utils/constants";
import {withStyles} from '@material-ui/core/styles';
import styles from './jscss';
/*
* <IconButton color="inherit" onClick={() => onChangeIcon()}>
    <ContactPhone/>
</IconButton>
* */

export default withStyles(styles)(
    class NavBar extends Component {
        state = {
            anchorElSignUp: null,
            anchorElShare: null
        };

        handleOpenPopoverSignUp = event => {
            this.setState({
                anchorElSignUp: event.currentTarget,
            });
        };

        handleOpenPopoverShare = event => {
            this.setState({
                anchorElShare: event.currentTarget
            });
        };

        handleClosePopoverSignUp = () => {
            this.setState({
                anchorElSignUp: null,
            });
        };

        handleClosePopoverShare = () => {
            this.setState({
                anchorElShare: null
            });
        };

        render() {
            const { classes } = this.props;
            const { anchorElSignUp, anchorElShare } = this.state;
            const openPopoverSignUp = Boolean(anchorElSignUp);
            const openPopoverShare = Boolean(anchorElShare);

            return (
                <Fragment>
                    <AppBar position="fixed" className={classes['app-bar']}>
                        <Toolbar className={classes.toolbar}>
                            <div className={classes['app-bar-left']}>
                                <Tooltip title="Ir ao Mercado na Rede" placement="bottom">
                                    <a href="http://www.mercadonarede.com.br" target="_blank" rel="noopener noreferrer">
                                        <img src={MNR_LOGO} alt="logo" className={classNames(classes.logo, MNR_NO_LOGO && classes['no-logo'])}/>
                                    </a>
                                </Tooltip>
                            </div>
                            <div className={classes['app-bar-center']}>
                                <SuggestionsField />
                            </div>
                            <div className={classes['app-bar-right']}>
                                <Tooltip title="Compartilhe sua página" placement="bottom">
                                    <IconButton
                                        color="inherit"
                                        aria-owns={openPopoverShare ? 'simple-popper-compartilhar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleOpenPopoverShare}
                                    >
                                        <ShareOutlined/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Cadastre-se" placement="bottom">
                                    <IconButton
                                        color="inherit"
                                        aria-owns={openPopoverSignUp ? 'simple-popper-cadastro' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleOpenPopoverSignUp}
                                    >
                                        <PersonAdd/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <PopoverShare
                        open={openPopoverShare}
                        anchorEl={anchorElShare}
                        onClose={this.handleClosePopoverShare}
                        inputValue={"MERCADO-NA-REDE-DF"}
                    />
                    <PopoverSignUp
                        open={openPopoverSignUp}
                        anchorEl={anchorElSignUp}
                        onClose={this.handleClosePopoverSignUp}
                    />
                </Fragment>
            )
        }
    }
);