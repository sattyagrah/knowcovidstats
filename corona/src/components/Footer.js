import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "../styles";

function Footer() {
  const classes = useStyles();
  return (
    <main>
      <Typography
        className={classes.Typography}
        gutterBottom
        variant="h6"
        component="h2"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: "bold",
          paddingTop: "20px",
        }}
      >
        We stand with everyone fighting on the frontlines.
      </Typography>
    </main>
  );
}
export default Footer;
