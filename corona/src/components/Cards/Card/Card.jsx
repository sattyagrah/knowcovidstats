import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Card.module.css";

const CardComponent = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
}) => (
  <Grid
    item
    xs={12}
    md={3}
    component={Card}
    className={cx(styles.card, className)}
  >
    <CardContent>
      <Typography
        color="textSecondary"
        gutterBottom
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        {cardTitle}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        style={{ fontFamily: "'Nunito', sans-serif", fontWeight: "bold" }}
      >
        <CountUp start={0} end={value} duration={2.75} separator="," />
      </Typography>
      <Typography
        color="textSecondary"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.2rem",
        }}
      >
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography
        variant="body2"
        component="p"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1rem",
        }}
      >
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;
