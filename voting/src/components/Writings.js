import React from "react";
import { Typography, Container } from "@material-ui/core";
import useStyles from "../styles";

function Writings() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <Typography
          className={classes.typography}
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{
            fontSize: "2.3rem",
          }}
        >
          Voting using Blockchain.
        </Typography>
        <Typography
          className={classes.typography}
          variant="h5"
          align="center"
          paragraph
          color="textSecondary"
          style={{
            fontSize: "1.5rem",
          }}
        >
          This is an example demonstration of voting using Blockchain. Kindly
          enter the details for further proceedings.
        </Typography>
      </Container>
    </div>
  );
}

export default Writings;
