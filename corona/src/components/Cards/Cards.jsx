import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography
        gutterBottom
        variant="h4"
        component="h2"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: "bold",
          marginBottom: "25px",
        }}
      >
        COVID-19 DATA
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of confirmed cases due to COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deceased"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused due to COVID-19."
        />
      </Grid>
      <Typography
        // gutterBottom
        variant="caption"
        component="h2"
        style={{
          fontFamily: "'Nunito', sans-serif",
          paddingTop: "20px",
          textAlign: "center",
          maxWidth: "80%",
          color: "red",
          fontWeight: "bold",
        }}
      >
        <InfoOutlinedIcon
          style={{
            fontSize: "15px",
            display: "inline",
            // justifyContent: "left",
            paddingTop: "5px",
          }}
        />{" "}
        Data may be delayed as it's being fetched from an external source. As
        Covid cases are reducing due to large vaccination drive, sources stopped
        pulishing data to the API. Hence, Data shown here is provisional. For
        accurate data please visit to the concerned official sites.
      </Typography>
    </div>
  );
};

export default Info;
