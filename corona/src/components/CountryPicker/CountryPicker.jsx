import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
        style={{
          fontFamily: "'Akaya Telivigala', cursive",
          fontSize: "1.1rem",
        }}
      >
        <option value="" style={{ fontFamily: "'Akaya Telivigala', cursive" }}>
          Global
        </option>
        {countries.map((country, i) => (
          <option
            key={i}
            value={country}
            style={{ fontFamily: "'Akaya Telivigala', cursive" }}
          >
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
