import React from "react";
import { Typography, AppBar, Toolbar, Container } from "@material-ui/core";
import useStyles from "../styles";

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <AppBar position="static" style={{ top: "auto", bottom: 0 }}>
        <Toolbar style={{ backgroundColor: "#841818" }}>
          <Container>
            <Typography
              className={classes.typography}
              variant="h6"
              align="center"
              style={{
                fontSize: "1.6rem",
                padding: "1px",
              }}
            >
              2021 &#169; All right Reserved
            </Typography>
            <Typography
              className={classes.typography}
              variant="h6"
              align="center"
              style={{
                fontSize: "1.6rem",
              }}
            >
              Proudly created by : Kumar Satyanshu
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
