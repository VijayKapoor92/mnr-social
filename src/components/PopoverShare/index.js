import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Popover,
    TextField,
    InputAdornment,
    Button
} from '@material-ui/core';
import {
    Language,
    Send
} from '@material-ui/icons';
import ButtonLink from '../ButtonLink';
import styles from './jscss';
import {withStyles} from '@material-ui/core/styles';

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
};

const transformOrigin = {
    vertical: 'top',
    horizontal: 'center',
};

const PopoverShare = ({classes, id, open, anchorEl, onClose, inputValue}) =>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        classes={{
            paper: classes.paper
        }}
    >
        <Typography variant="title">Compartilhe seu perfil</Typography>
        <Typography variant="caption" className={classes.caption}>
            Compartilhe sua página com seus contatos, é fácil. Confirme se o link abaixo está correto e clique em <strong>Compartilhar</strong> e pronto! Depois é só compartilhar com quem quiser!
        </Typography>
        <Typography variant="caption" className={classes.caption}>
            www.mercadonarede.com.br/empresa/
        </Typography>
        <Typography component="div" className={classes['textfield-container']}>
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
                        className: classes.inputField
                    }
                }}
                value={inputValue}
            />
        </Typography>
        <Typography component="div" className={classes['button-container']}>
            <ButtonLink
                label="Compartilhar"
                icon={<Send className={classes.rightIcon} />}
            />
        </Typography>
    </Popover>
;

PopoverShare.propTypes = {
    id: PropTypes.string,
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

PopoverShare.defaultValues = {
    id: "simple-popper-compartilhado"
};

export default withStyles(styles)(PopoverShare);