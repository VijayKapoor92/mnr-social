import React, {Component} from 'react';
import classNames from 'classnames';
import {
    Paper,
    List,
    ListItem,
    ListItemText,
    Avatar
} from '@material-ui/core';
import Business from '@material-ui/icons/Business';
import styles from './jscss';
import {withStyles} from '@material-ui/core/styles';

import {suggestions} from '../../utils/suggestions';

export default withStyles(styles)(
    class Suggestions extends Component {
        constructor(props){
            super(props);
            this.state = {
                suggestions: []
            }
        }

        componentWillMount(){
            this.setState({suggestions: suggestions})
        }

        render() {
            const { classes, query } = this.props;
            const open = query.length > 0;
            return (
                <Paper className={classNames(classes['suggestions-container'], open && classes['suggestions-container-opened'])}>
                    {suggestions && suggestions.length > 0 && suggestions.map(({id, primary, secondary}) => (
                        <List key={id} className={classNames(classes.list, open && classes['list-visible'])}>
                            <ListItem>
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
                        </List>
                    ))}
                </Paper>
            )
        }
    }
)