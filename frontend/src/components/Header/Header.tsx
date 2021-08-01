import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "relative",
    color: "default",
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" color="inherit" noWrap>
          Add an event
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
