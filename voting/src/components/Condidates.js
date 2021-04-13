import React, { useState } from "react";
import {
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../styles";
import RegistrationForm from "./RegistrationForm";
import Mainbutton from "./Mainbutton";
const SHA256 = require("crypto-js/sha256");

function Condidates() {
  const [visible, setVisible] = useState(true);
  const [visiblec, setVisiblec] = useState(true);
  const classes = useStyles();

  let msg = document.getElementById("message").textContent;

  class Block {
    constructor(index, timestamp, data, previousHash = "") {
      this.index = index;
      this.previousHash = previousHash;
      this.timestamp = timestamp;
      this.data = data;
      this.hash = this.calculateHash();
      this.nonce = 0;
    }

    calculateHash() {
      return SHA256(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.data) +
          this.nonce
      ).toString();
    }

    mineBlock(difficulty) {
      while (
        this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
      ) {
        this.nonce++;
        this.hash = this.calculateHash();
      }
    }
  }

  class Blockchain {
    constructor() {
      this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
      return new Block(0, Date(), "Genesis BLock", "0");
    }

    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
      newBlock.previousHash = this.getLatestBlock().hash;
      newBlock.hash = newBlock.calculateHash();
      this.chain.push(newBlock);
    }

    // console.log(chain.length);
    isChainValid() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chian[i - 1];

        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
      return true;
    }
  }

  let sc = new Blockchain();
  let index = 1;
  let date = Date();
  // let data = { key: msg, voteedTo: this.condidate };
  // function doOnClick() {
  //   sc.addBlock(new Block(index, date, data));
  //   index++;
  // }
  // sc.addBlock(new Block(2, Date(), { key: "1702305012", voteedTo: "con-2" }));
  console.log(JSON.stringify(sc.chain[0].data));
  // console.log(sc.isChainValid());

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.card1s}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random/4"
              title="Image Title"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                gutterBottom
                id="con1"
                style={{
                  fontWeight: "Bold",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Chris Evans (Captain America)
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "#db6400",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Shivalik
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "red",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Some description of the condidate and why they are fighting the
                elections.
              </Typography>
            </CardContent>
            <CardActions>
              {visible ? (
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  className={classes.submit}
                  style={{ fontSize: "1.1rem" }}
                  onClick={() => {
                    let condidate = document.getElementById("con1").textContent;
                    // console.log(condidate);
                    // doOnClick();
                    // console.log(msg);
                    sc.addBlock(
                      new Block(index, date, { key: msg, voteedTo: condidate })
                    );
                    index++;
                    console.log(JSON.stringify(sc, null, 4));
                    setVisible(!visible);
                    document.getElementById("messagec").style.color = "#822659";
                    document.getElementById("messagec").textContent =
                      "Your Vote has been Casted.";
                  }}
                >
                  Vote
                </Button>
              ) : null}
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.card1a}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random/3"
              title="Image Title"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                gutterBottom
                id="con2"
                style={{
                  fontWeight: "Bold",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Robert Downey Jr. (Iron Man)
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "green",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Aravali
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "red",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Some description of the condidate and why they are fighting the
                elections.
              </Typography>
            </CardContent>
            <CardActions>
              {visible ? (
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  className={classes.submit}
                  style={{ fontSize: "1.1rem" }}
                  onClick={() => {
                    console.log(document.getElementById("con2").textContent);

                    let condidate = document.getElementById("con2").textContent;
                    // console.log(condidate);
                    // doOnClick();
                    // console.log(msg);
                    sc.addBlock(
                      new Block(index, date, { key: msg, voteedTo: condidate })
                    );
                    index++;
                    console.log(JSON.stringify(sc, null, 4));
                    setVisible(!visible);
                    document.getElementById("messagec").style.color = "#822659";
                    document.getElementById("messagec").textContent =
                      "Your Vote has been Casted.";
                  }}
                >
                  Vote
                </Button>
              ) : null}
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{ marginBottom: "15px" }}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card1n}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random/2"
              title="Image Title"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                gutterBottom
                id="con3"
                style={{
                  fontWeight: "Bold",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Peter Parker (Spiderman)
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "blue",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Neelgiri
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "red",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Some description of the condidate and why they are fighting the
                elections.
              </Typography>
            </CardContent>
            <CardActions>
              {visible ? (
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  type="submit"
                  id="con3b"
                  fullWidth
                  className={classes.submit}
                  style={{ fontSize: "1.1rem" }}
                  onClick={() => {
                    console.log(document.getElementById("con3").textContent);
                    let condidate = document.getElementById("con3").textContent;
                    // console.log(condidate);
                    // doOnClick();
                    // console.log(msg);
                    sc.addBlock(
                      new Block(index, date, { key: msg, voteedTo: condidate })
                    );
                    index++;
                    console.log(JSON.stringify(sc, null, 4));
                    setVisible(!visible);
                    document.getElementById("messagec").style.color = "#822659";
                    document.getElementById("messagec").textContent =
                      "Your Vote has been Casted.";
                  }}
                >
                  Vote
                </Button>
              ) : null}
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.card1}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random/1"
              title="Image Title"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                gutterBottom
                id="con4"
                style={{
                  fontWeight: "Bold",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Chris Hemsworth (Thor)
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "red",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Vindhyachal
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "red",
                  fontFamily: "'Akaya Telivigala', cursive",
                }}
              >
                Some description of the condidate and why they are fighting the
                elections.
              </Typography>
            </CardContent>
            <CardActions>
              {visible ? (
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                  className={classes.submit}
                  style={{ fontSize: "1.1rem" }}
                  onClick={() => {
                    console.log(document.getElementById("con4").textContent);
                    let condidate = document.getElementById("con4").textContent;
                    // console.log(condidate);
                    // doOnClick();
                    // console.log(msg);
                    sc.addBlock(
                      new Block(index, date, { key: msg, voteedTo: condidate })
                    );
                    index++;
                    console.log(JSON.stringify(sc, null, 4));
                    console.log(JSON.stringify(sc.chain[1].data.voteedTo));
                    setVisible(!visible);
                    document.getElementById("messagec").style.color = "#822659";
                    document.getElementById("messagec").textContent =
                      "Your Vote has been Casted.";
                  }}
                >
                  Vote
                </Button>
              ) : null}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Typography
        className={classes.typography}
        align="center"
        id="messagec"
        justify="center"
        style={{
          fontSize: "1.5rem",
          paddingBottom: "10px",
        }}
      ></Typography>
      <Button
        size="small"
        color="primary"
        variant="contained"
        type="submit"
        fullWidth
        className={classes.submit}
        style={{ fontSize: "1.1rem" }}
        onClick={() => {
          {
            visiblec ? <RegistrationForm /> : setVisiblec(<Mainbutton />);
          }
          window.location.reload();
          console.log("clicked");
        }}
      >
        Next
      </Button>
    </Container>
  );
}

export default Condidates;
