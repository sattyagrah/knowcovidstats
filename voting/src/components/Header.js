import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { HowToVote } from "@material-ui/icons";
import useStyles from "../styles";

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="relative" style={{ backgroundColor: "#ffab73" }}>
      <Toolbar>
        <HowToVote className={classes.icon} />
        <Typography
          className={classes.typography}
          variant="h6"
          style={{
            // fontFamily: "'Akaya Telivigala', cursive",
            fontSize: "1.6rem",
            color: "#822659",
            fontWeight: "bold",
          }}
        >
          Voting Using BlockChain
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
