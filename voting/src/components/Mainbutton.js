import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import useStyles from "../styles";
import Condidates from "./Condidates";

function Mainbutton() {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  function myFunction() {
    let msg = document.getElementById("message").textContent;
    console.log(msg);
    setVisible(!visible);
  }
  //   function handleClick() {}
  return (
    <main>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              className={classes.submit}
              variant="contained"
              color="primary"
              style={{ fontSize: "1.1rem" }}
              onClick={() => {
                setTimeout(myFunction, 2000);
              }}
              id="keybutton"
            >
              Copy Key
            </Button>
          </Grid>
        </Grid>
      </div>
      {visible ? <Condidates /> : null}
    </main>
  );
}
export default Mainbutton;
