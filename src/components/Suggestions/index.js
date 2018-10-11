import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import {
    Paper,
    List,
    ListItem,
    ListItemText,
    Avatar,
} from '@material-ui/core';
import Business from '@material-ui/icons/Business';
import Launch from '@material-ui/icons/Launch';
import styles from './jscss';
import {withStyles} from '@material-ui/core/styles';
//TODO: MUDAR PARA CONST A DECLARACAO DO COMPONENTE
export default withStyles(styles)(
    class Suggestions extends Component {
        render() {
            const { classes, query, focus, suggestions } = this.props;
            const open = query.length > 0;
            const hasSuggestions = suggestions.length > 0;

            return (
                <Fragment>
                    {open && suggestions && hasSuggestions && focus && (
                        <Paper className={classes['suggestions-container']}>
                            <List>
                                {suggestions.map(({id, primary, secondary}) => (
                                    <ListItem key={id} className={classes.listItem}>
                                        <Avatar>
                                            <Business/>
                                        </Avatar>
                                        <ListItemText
                                            primary={primary}
                                            secondary={secondary}
                                            primaryTypographyProps={{
                                                noWrap: true
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    )}
                </Fragment>
            )
        }
    }
)