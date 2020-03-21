import React from "react";
import { Link } from "react-router-dom"

import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RadioIcon from "@material-ui/icons/RadioTwoTone";
import FaceIcon from "@material-ui/icons/FaceTwoTone";
import Typography from "@material-ui/core/Typography";

import Signout  from "../Auth/Signout"

const Header = ({ classes, currentUser }) => {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        {/* title logo */}
        <Link to="/" className={classes.grow}>
          <RadioIcon className={classes.logo} color="secondary"/>
          <Typography variant="headline" color="secondary" noWrap>
            ReactTRACKS
          </Typography>
        </Link>

        {/* Auth user info */}
        {
          currentUser && (
            <Link to={`/profile/${currentUser.id}`} className={classes.grow}>
              <FaceIcon className={classes.faceIcon}/>
              <Typography className={classes.username}>
                {currentUser.username}
              </Typography>
            </Link>
          )
        }

        {/* sign out button */}
        <Signout/>
      </Toolbar>
    </AppBar>
  )
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  logo: {
    marginRight: theme.spacing.unit,
    fontSize: 45
  },
  faceIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 30,
    color: "white"
  },
  username: {
    color: "white",
    fontSize: 22
  }
});

export default withStyles(styles)(Header);
