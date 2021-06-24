import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  TextField,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../styles";

function Pincode(props) {
  const [pinc, setPinc] = useState("");
  const [visible, setVisible] = useState(false);
  const [visiblet, setVisiblet] = useState(false);

  function myFunction() {
    document.getElementById("message").style.color !== "red"
      ? setVisible(!visible)
      : setVisible(visible);
  }

  let cowinlink = "https://www.cowin.gov.in";

  function date() {
    let date = new Date().getDate();
    if (date < 10) {
      date = "0" + date;
    }
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    return `${date}-${month}-${new Date().getFullYear()}`;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let pin = document.getElementById("pincode").value;

    let msg = document.getElementById("message");
    if (pin.length === 0 || pin.length > 6 || pin.length < 6) {
      msg.style.color = "red";
      msg.textContent = `Pin must be of 6 digits.`;
    } else if (typeof pin !== "number") {
      msg.style.color = "red";
      msg.textContent = `Enter correct Pincode.`;
    } else if (pin.length === 6 && typeof pin === "number") {
      msg.textContent = null;
    }

    function pins() {
      let msg = document.getElementById("message");
      let pinValue = document.getElementById("pincode").value;
      if (pinValue.toString().length === 6) {
        return document.getElementById("pincode").value;
      } else {
        msg.style.color = "Red";
        msg.textContent = `Pin must be of 6 digits.`;
      }
    }

    function pincodes() {
      let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pins()}&date=${date()}`;
      axios.get(url).then((response) => {
        let availableSlots = [];
        let originalData = response.data.sessions;
        if (originalData.length > 0) {
          console.log(originalData);
          originalData.forEach((e) => {
            if (e.available_capacity > 0) {
              availableSlots.push(
                `${e.available_capacity} Dose/s(Dose 1: ${e.available_capacity_dose1}, Dose 2: ${e.available_capacity_dose2}) available at ${e.name} for age ${e.min_age_limit}+`
              );
            }
          });
          availableSlots.forEach((e) => {
            console.log(e);
          });
          if (availableSlots.length > 0) {
            console.log(
              `Vaccines are available at ${availableSlots.length} centers`
            );
            msg.style.color = "black";
            msg.style.cursor = "pointer";
            msg.textContent = `Vaccines are available at ${availableSlots.length} centers`;
          } else {
            console.log(`No vaccine is available on ${date()}.`);
            msg.style.color = "red";
            msg.textContent = `No Vaccine available on ${date()}.`;
          }
        } else {
          console.log(`No vaccine is available on ${date()}.`);
          msg.style.color = "red";
          msg.textContent = `No Vaccine available on ${date()}.`;
        }
      });
    }
    pincodes();
  }

  const classes = useStyles();
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item>
            <Card
              className={classes.card}
              style={{ borderBottom: "10px solid pink" }}
            >
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Typography
                  className={classes.typography}
                  align="center"
                  style={{
                    fontSize: "1.5rem",
                    paddingBottom: "10px",
                    color: "#822659",
                  }}
                >
                  Check vaccine availability here :
                </Typography>
                <Grid container spacing={2} style={{ marginBottom: "5px" }}>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: "bold",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      autoComplete="pincode"
                      name="pincode"
                      variant="outlined"
                      required
                      fullWidth
                      id="pincode"
                      type="text"
                      label="Pincode"
                      autoFocus
                      value={pinc}
                      onChange={(e) => setPinc(e.target.value)}
                      className={classes.typography}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginBottom: "5px" }}>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      style={{
                        fontSize: "1.1rem",
                      }}
                      onClick={() => {
                        setVisiblet(!visiblet);
                        setTimeout(myFunction, 1000);
                      }}
                    >
                      search
                    </Button>
                  </Grid>
                </Grid>
                <Typography
                  className={classes.typography}
                  align="center"
                  id="message"
                  href={cowinlink}
                  onClick={(e) => e.preventDefault}
                  justify="center"
                  style={{
                    fontSize: "1.5rem",
                    paddingBottom: "10px",
                  }}
                ></Typography>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Pincode;
