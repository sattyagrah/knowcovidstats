import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: "'Akaya Telivigala', cursive",
  },
  card: {
    backgroundColor: "white", // #f7d9d9
    margin: "10px 10px",
    boxShadow: "30px",
  },
  form: {
    fontFamily: "'Akaya Telivigala', cursive",
    padding: "15px 15px 15px 15px",
  },
  submit: {
    fontFamily: "'Akaya Telivigala', cursive",
  },
  cardGrid: {
    padding: "20px 0",
    fontFamily: "'Akaya Telivigala', cursive",
    boxShadow: "30px",
    // marginBottom: "",
  },
}));

export default useStyles;
