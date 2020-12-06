import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import { withRouter, NavLink } from "react-router-dom";
import { compose } from 'redux';
import { drawer } from './config';
import styles from './styles';

const Drawer = props => {
  const { classes } = props;

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
        <List>
          {drawer.map((tab) => (
          <ListItem button key={tab.name}>
            <ListItemIcon>
              <tab.iconComponent/>
            </ListItemIcon>
            <NavLink className={classes.navLinkStyles} exact to={tab.link} >
              <ListItemText className={classes.listItemTextStyles} primary={tab.name} />
            </NavLink>
          </ListItem>
          ))}
        </List>
    </MUIDrawer>
  );
};

export default compose(withRouter,withStyles(styles))(Drawer);

