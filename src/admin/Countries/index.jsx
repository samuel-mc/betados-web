import React, { useEffect, useState } from "react";
import Body from "../CatalogBody";

import useCountries from "../../hooks/useCountries";
import Loading from "../Loading";
import CatalogCard from "../CatalogCard";
import {
  Button,
  Card,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import Modal from "../Modal";

const CountryCard = ({ country }) => {
  const [open, setOpen] = useState(false);

  const [countryName, setCountryName] = useState(country.name);
  const [countryLogo, setCountryLogo] = useState(country.logo);

  const { updateCountry } = useCountries();

  const handleSave = async () => {
    setOpen(false);
    const countryUpdated = {
      ...country,
      name: countryName,
      logo: countryLogo,
    };
    await updateCountry(countryUpdated);
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

  const { createCountry } = useCountries();

  const handleSave = async () => {
    const country = {
      name: countryName,
      logo: countryLogo,
    };
    await createCountry(country);
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

const Countries = () => {
  const { fetchCountries } = useCountries();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Catalog - Countries";
    setLoading(true);
    fetchCountries()
      .then((data) => {
        setLoading(false);
        setCountries(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
          <NewCountry countries={countries} setCountries={setCountries} open={open} setOpen={setOpen} />
        </div>
      )}
    </Body>
  );
};

export default Countries;
