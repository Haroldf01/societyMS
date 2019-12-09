import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    marginTop: theme.spacing * 3,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Navbar extends Component {
  render() {
    const {classes} = this.props;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="contrast" onClick={this.props.toggleDrawer}><MenuIcon /></IconButton> */}
          <Typography className={classes.flex} type="title" color="inherit">
            Other Links for Navigation
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
