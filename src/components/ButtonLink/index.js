import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from '../PopoverShare/jscss';
import {withStyles} from '@material-ui/core/styles';
import classNames from "classnames";

const ButtonLink = ({classes, href, label, variant, size, smallLabel, icon}) =>
    <Button
        variant="outlined"
        size="small"
        href={href}
        className={classNames(classes.button, smallLabel && classes.smallLabel)}
    >
        {label}
        {icon && icon}
    </Button>
;

ButtonLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
    smallLabel: PropTypes.bool
};

export default withStyles(styles)(ButtonLink);