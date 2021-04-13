import React from "react";
import { CssBaseline } from "@material-ui/core";
// import useStyles from "./styles";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import Writings from "./components/Writings";
import Header from "./components/Header";

function App() {
  // const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <main style={{ backgroundColor: "#e3e3e3" }}>
        <Writings />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
