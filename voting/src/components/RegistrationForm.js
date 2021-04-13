import React, { useState } from "react";
import {
  Typography,
  Card,
  TextField,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../styles";
import Mainbutton from "./Mainbutton";
const SHA256 = require("crypto-js/sha256");

function RegistrationForm(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cname, setCname] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [house, setHouse] = useState("");
  const [enroll, setEnroll] = useState("");
  const [visible, setVisible] = useState(false);

  function myFunction() {
    document.getElementById("message").style.color !== "red"
      ? setVisible(!visible)
      : setVisible(visible);
  }

  function handleSubmit(event) {
    let voter = [
      1702305001,
      1702305002,
      1702305004,
      1702305005,
      1702305006,
      1702305008,
      1702305009,
      1702305010,
      1702305011,
      1702305012,
      1702305014,
      1702305015,
      1702305016,
      1702305020,
      1702305024,
      1702305025,
      1702705026,
      1702705027,
      1702305028,
    ];
    event.preventDefault();
    let roll = document.getElementById("enroll").value;
    let finame = document.getElementById("firstName").value;
    let laname = document.getElementById("lastName").value;
    let coname = document.getElementById("courseName").value;
    let sename = document.getElementById("semName").value;
    let emaili = document.getElementById("email").value;
    let houseN = document.getElementById("house").value;
    let enrollm = document.getElementById("enroll").value;
    console.log(voter.indexOf(+enrollm));

    let msg = document.getElementById("message");
    if (
      finame === "" ||
      laname === "" ||
      coname === "" ||
      sename === "" ||
      emaili === "" ||
      houseN === "" ||
      enrollm === ""
    ) {
      msg.style.color = "red";
      msg.textContent = `Details must not be empty.`;
    } else if (+sename < 1 || +sename > 8) {
      msg.style.color = "red";
      msg.textContent = `Invalid semester : ${sname} !! Try between 1 to 8`;
    } else if (
      houseN.toLowerCase() !== "shivalik" &&
      houseN.toLowerCase() !== "aravali" &&
      houseN.toLowerCase() !== "neelgiri" &&
      houseN.toLowerCase() !== "vindhyachal"
    ) {
      msg.style.color = "red";
      msg.textContent = `Enter Correct house name!!`;
    } else if (
      localStorage.getItem(+document.getElementById("enroll").value) !== null
    ) {
      msg.style.color = "red";
      msg.textContent = `${enroll}'s vote has been casted.`;
    } else if (voter.includes(+roll)) {
      msg.style.color = "#822659";
      let text = SHA256(enroll + Date() + house).toString();
      msg.textContent = `${text}`;
      console.log(
        `Name: ${fname} ${lname}`,
        "\n",
        `Course: ${cname}`,
        "\n",
        `Semester: ${sname}`,
        "\n",
        `Email: ${email}`,
        "\n",
        `House: ${house}`,
        "\n",
        `Enrollment number: ${enroll}`
      );
      localStorage.setItem(+document.getElementById("enroll").value, Date());
      setFname("");
      setLname("");
      setCname("");
      setSname("");
      setEmail("");
      setHouse("");
      setEnroll("");
      // console.log(document.getElementById("message").textContent);
    } else {
      msg.style.color = "red";
      msg.textContent = `Enrollment Number: ${enroll} doesn't exist.`;
    }
  }

  const classes = useStyles();
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item>
            <Card className={classes.card}>
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
                  Register to get keys:
                </Typography>
                <Grid container spacing={2} style={{ marginBottom: "5px" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      type="text"
                      label="First Name"
                      autoFocus
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className={classes.typography}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      autoComplete="lname"
                      name="lastName"
                      variant="outlined"
                      required
                      fullWidth
                      type="text"
                      id="lastName"
                      label="Last Name"
                      autoFocus
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      className={classes.typography}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      variant="outlined"
                      required
                      type="text"
                      fullWidth
                      id="courseName"
                      label="Course Name"
                      name="courseName"
                      value={cname}
                      onChange={(e) => setCname(e.target.value)}
                      autoComplete="cname"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      name="semName"
                      variant="outlined"
                      required
                      fullWidth
                      type="tel"
                      id="semName"
                      label="Semester"
                      autoFocus
                      value={sname}
                      onChange={(e) => setSname(e.target.value)}
                      className={classes.typography}
                      autoComplete="sname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      variant="outlined"
                      required
                      fullWidth
                      type="email"
                      id="email"
                      label="Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      variant="outlined"
                      required
                      fullWidth
                      type="text"
                      id="house"
                      label="House Name"
                      name="house"
                      value={house}
                      onChange={(e) => setHouse(e.target.value)}
                      autoComplete="house"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      InputLabelProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          color: "#822659",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontFamily: "'Akaya Telivigala', cursive",
                          fontSize: "1.2rem",
                          color: "#822659",
                        },
                      }}
                      variant="outlined"
                      required
                      fullWidth
                      name="enroll"
                      value={enroll}
                      label="Enrollment ID"
                      type="tel"
                      id="enroll"
                      onChange={(e) => setEnroll(e.target.value)}
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ fontSize: "1.1rem" }}
                  onClick={() => {
                    setTimeout(myFunction, 2000);
                  }}
                >
                  Get your key
                </Button>
                <Typography
                  className={classes.typography}
                  align="center"
                  id="message"
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
        {visible ? <Mainbutton /> : null}
      </Container>
    </main>
  );
}

export default RegistrationForm;
