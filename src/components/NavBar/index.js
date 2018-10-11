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
            anchorElCadastro: null,
            anchorElCompartilhar: null
        };

        handleOpenPopoverCadastro = event => {
            this.setState({
                anchorElCadastro: event.currentTarget,
            });
        };

        handleOpenPopoverCompartilhar = event => {
            this.setState({
                anchorElCompartilhar: event.currentTarget,
            });
        };

        handleClosePopoverCadastro = () => {
            this.setState({
                anchorElCadastro: null,
            });
        };

        handleClosePopoverCompartilhar = () => {
            this.setState({
                anchorElCompartilhar: null,
            });
        };

        render() {
            const { classes } = this.props;
            const { anchorElCadastro, anchorElCompartilhar } = this.state;
            const openPopoverCadastro = Boolean(anchorElCadastro);
            const openPopoverCompartilhar = Boolean(anchorElCompartilhar);

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
                                        aria-owns={openPopoverCompartilhar ? 'simple-popper-compartilhar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleOpenPopoverCompartilhar}
                                    >
                                        <ShareOutlined/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Cadastre-se" placement="bottom">
                                    <IconButton
                                        color="inherit"
                                        aria-owns={openPopoverCadastro ? 'simple-popper-cadastro' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleOpenPopoverCadastro}
                                    >
                                        <PersonAdd/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Popover
                        id="simple-popper-compartilhado"
                        open={openPopoverCompartilhar}
                        anchorEl={anchorElCompartilhar}
                        onClose={this.handleClosePopoverCompartilhar}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        classes={{
                            paper: classes.paper
                        }}
                    >
                        <Typography variant="title">Compartilhe seu perfil</Typography>
                        <Typography variant="caption" style={{marginTop: 10}}>
                            Compartilhe sua página com seus contatos, é fácil. Confirme se o link abaixo está correto e clique em <strong>Compartilhar</strong> e pronto! Depois é só compartilhar com quem quiser!
                        </Typography>
                        <Typography variant="caption" style={{marginTop: 10}}>
                            www.mercadonarede.com.br/empresa/
                        </Typography>
                        <Typography component="div" style={{marginTop: 5}}>
                            <TextField
                                className={classes.textfield}
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Language/>
                                        </InputAdornment>
                                    ),
                                    inputProps: {
                                        className: classes.input
                                    }
                                }}
                                value="MERCADO-NA-REDE-DF"
                            />
                        </Typography>
                        <Typography component="div" style={{marginTop: 30, display: 'flex', justifyContent: 'flex-end'}}>
                            <Button variant="outlined" size="small" className={classes.button}>
                                Compartilhar
                                <Send className={classes.rightIcon} />
                            </Button>
                        </Typography>
                    </Popover>
                    <Popover
                        id="simple-popper-cadastro"
                        open={openPopoverCadastro}
                        anchorEl={anchorElCadastro}
                        onClose={this.handleClosePopoverCadastro}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        classes={{
                            paper: classes.paperCadastro
                        }}
                    >
                        <Typography variant="title">Cadastro</Typography>
                        <Typography variant="caption" style={{marginTop: 10}}>
                            Escolha o que deseja fazer no Mercado na Rede: caso o seu interesse maior é de vender então escolha a opção “Fornecedor”, vale ressaltar que como fornecedor a sua empresa também poderá realizar compras. Caso contrário, se a sua empresa tem interesse em somente comprar então escolha uma das opções de compradores aquele que adequa ao perfil da sua empresa:
                        </Typography>
                        <Typography component="div" style={{marginTop: 30, height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'stretch'}}>
                            <Button variant="outlined" size="small" href={MNR_CADASTRO_COMPRADOR_EMPRESAS} className={classNames(classes.button, classes.smallLabel)}>
                                Comprador (Empresas de transporte, frotistas e similares)
                            </Button>
                            <Button variant="outlined" size="small" href={MNR_CADASTRO_COMPRADOR_CONCESSIONARIAS} className={classNames(classes.button, classes.smallLabel)}>
                                Comprador (Concessionárias, lojas e distribuidores de autopeças)
                            </Button>
                            <Button variant="outlined" size="small" href={MNR_CADASTRO_FORNECEDOR} className={classNames(classes.button, classes.smallLabel)}>
                                Fornecedor
                            </Button>
                        </Typography>
                    </Popover>
                </Fragment>
            )
        }
    }
);