import React from "react";
import { ApolloConsumer } from "react-apollo"
import { gql } from "apollo-boost"

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes }) => {
  return (
    <form>
      <Paper className={classes.root} elevation={1}>
        <IconButton>
          <ClearIcon/>
        </IconButton>
        <TextField
          fullWidth
          placeholder="search all tracks"
          InputProps={{
            disableUnderline: true
          }}
        />
        <IconButton type="submit">
          <SearchIcon/>
        </IconButton>
      </Paper>
    </form>
  )
};

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
