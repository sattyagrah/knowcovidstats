import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "'Akaya Telivigala', cursive",
    padding: "30px",
  },
  typography: {
    fontFamily: "'Akaya Telivigala', cursive",
  },
  icon: {
    marginRight: "15px",
    color: "#822659",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f7d9d9",
    margin: "10px 10px",
  },
  card1: {
    backgroundColor: "#ffba93",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px",
  },
  card1a: {
    backgroundColor: "#a8df65",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px",
  },
  card1s: {
    backgroundColor: "#fff76a",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px",
  },
  card1n: {
    backgroundColor: "#8ac4d0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px",
  },
  form: {
    width: "100%",
    fontFamily: "'Akaya Telivigala', cursive",
    padding: "15px 15px 15px 15px",
  },
  submit: {
    fontFamily: "'Akaya Telivigala', cursive",
  },
  cardGrid: {
    padding: "20px 0",
    // marginBottom: "",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  heroButtons: {
    padding: theme.spacing(8, 0, 6),
  },
  keybutton: {
    disabled: true,
  },
}));

export default useStyles;
