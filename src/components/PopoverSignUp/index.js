import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Popover,
    Button
} from '@material-ui/core';
import ButtonLink from '../ButtonLink';
import styles from '../PopoverShare/jscss';
import {withStyles} from '@material-ui/core/styles';
import classNames from "classnames";
import {
    MNR_CADASTRO_COMPRADOR_CONCESSIONARIAS,
    MNR_CADASTRO_COMPRADOR_EMPRESAS,
    MNR_CADASTRO_FORNECEDOR
} from "../../utils/constants";

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
};

const transformOrigin = {
    vertical: 'top',
    horizontal: 'center',
};

const PopoverSignUp = ({classes, id, open, anchorEl, onClose}) =>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        classes={{
            paper: classes.paperCadastro
        }}
    >
        <Typography variant="title">Cadastro</Typography>
        <Typography variant="caption" className={classes.caption}>
            Escolha o que deseja fazer no Mercado na Rede: caso o seu interesse maior é de vender então escolha a opção “Fornecedor”, vale ressaltar que como fornecedor a sua empresa também poderá realizar compras. Caso contrário, se a sua empresa tem interesse em somente comprar então escolha uma das opções de compradores aquele que adequa ao perfil da sua empresa:
        </Typography>
        <Typography component="div" className={classes['actions-button-container']}>
            <ButtonLink
                href={MNR_CADASTRO_COMPRADOR_EMPRESAS}
                label="Comprador (Empresas de transporte, frotistas e similares)"
                smallLabel
            />
            <ButtonLink
                href={MNR_CADASTRO_COMPRADOR_CONCESSIONARIAS}
                label="Comprador (Concessionárias, lojas e distribuidores de autopeças)"
                smallLabel
            />
            <ButtonLink
                href={MNR_CADASTRO_FORNECEDOR}
                label="Fornecedor"
                smallLabel
            />
        </Typography>
    </Popover>
;

PopoverSignUp.propTypes = {
    id: PropTypes.string,
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

PopoverSignUp.defaultValues = {
    id: "simple-popper-cadastro"
};

export default withStyles(styles)(PopoverSignUp);