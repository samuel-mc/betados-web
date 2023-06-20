import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

import * as countriesActions from "../../actions/countriesActions";

import Body from "../CatalogBody";
import Loading from "../Loading";
import CatalogCard from "../CatalogCard";
import Modal from "../Modal";

const CountryCard = ({ country }) => {
  const [open, setOpen] = useState(false);

  const [countryName, setCountryName] = useState(country.name);
  const [countryLogo, setCountryLogo] = useState(country.logo);

  const handleSave = async () => {
    setOpen(false);
    const countryUpdated = {
      ...country,
      name: countryName,
      logo: countryLogo,
    };
    //await updateCountry(countryUpdated);
    country.name = countryName;
    country.logo = countryLogo;
  };

  return (
    <>
      <CatalogCard
        key={country.id}
        handleEdit={() => setOpen(true)}
        handleDelete={() => console.log("delete")}
      >
        <h1>{country.name}</h1>
        <img src={country.logo} />
      </CatalogCard>
      <Modal title="Edit Countr" open={open} onClose={() => {}}>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <TextField
            label="Logo URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={countryLogo}
            onChange={(e) => setCountryLogo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={() => handleSave()}>
            Save
          </Button>
          <Button color="error" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
};

const NewCountry = ({ countries, setCountries, open, setOpen }) => {
  const [countryName, setCountryName] = useState("");
  const [countryLogo, setCountryLogo] = useState("");

  const handleSave = async () => {
    const country = {
      name: countryName,
      logo: countryLogo,
    };
    //await createCountry(country);
    setOpen(false);
    setCountries([...countries, country]);
  };

  return (
    <Modal title="Edit Sport" open={open} onClose={() => {}}>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <TextField
          label="Logo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={countryLogo}
          onChange={(e) => setCountryLogo(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button color="success" onClick={() => handleSave()}>
          Save
        </Button>
        <Button color="error" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Modal>
  );
};

const Countries = (props) => {
  const { getCountries, countriesReducer } = props;
  const { countries, loading } = countriesReducer;
  const [open, setOpen] = useState(false);

  const fetchCountries = async () => {
    await getCountries();
  };

  useEffect(() => {
    document.title = "Catalog - Countries";
    fetchCountries();
  }, []);
  return (
    <Body title={"Catalog - Countries"}>
      {loading && <Loading />}
      {!loading && (
        <div className="catalog_grid">
          {countries.map((country) => {
            return <CountryCard key={country.id} country={country} />;
          })}
          <Card className="sports__add">
            <Button
              variant="contained"
              color="success"
              onClick={() => setOpen(true)}
            >
              <h2>Add Country</h2>
            </Button>
          </Card>
          <NewCountry countries={countries} open={open} setOpen={setOpen} />
        </div>
      )}
    </Body>
  );
};

const mapStateToProps = ({ countriesReducer }) => ({
  countriesReducer,
});

const mapDispatchToProps = {
  ...countriesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
