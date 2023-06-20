import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  TextField,
  DialogActions,
  DialogContent,
} from "@mui/material";
import * as sportActions from "../../actions/sportsActions";

import Loading from "../Loading";
import Modal from "../Modal";
import Body from "../CatalogBody";
import CatalogCard from "../CatalogCard";

const SportCard = ({ sport, putSport }) => {
  const [open, setOpen] = useState(false);
  const [sportName, setSportName] = useState(sport.name);
  const [sportLogo, setSportLogo] = useState(sport.logo);

  const handleSave = async () => {
    const sportUpdated = {
      ...sport,
      name: sportName,
      logo: sportLogo,
    };
    setOpen(false);
    await putSport(sportUpdated);
  };

  return (
    <>
      <CatalogCard
        handleEdit={() => setOpen(true)}
        handleDelete={() => console.log("delete")}
      >
        <h2>{sport.name}</h2>
        <img src={sport.logo} alt={sport.name} />
      </CatalogCard>
      <Modal title="Edit Sport" open={open} onClose={() => {}}>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={sportName}
            onChange={(e) => setSportName(e.target.value)}
          />
          <TextField
            label="Logo"
            variant="outlined"
            fullWidth
            margin="normal"
            value={sportLogo}
            onChange={(e) => setSportLogo(e.target.value)}
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

const NewSport = ({ open, postSport, setOpen }) => {
  const [sportName, setSportName] = useState("");
  const [sportLogo, setSportLogo] = useState("");

  const handleSave = async () => {
    const sport = {
      name: sportName,
      logo: sportLogo,
    };
    await postSport(sport);
    setOpen(false);
  };

  return (
    <Modal title="Edit Sport" open={open} onClose={() => {}}>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={sportName}
          onChange={(e) => setSportName(e.target.value)}
        />
        <TextField
          label="Logo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={sportLogo}
          onChange={(e) => setSportLogo(e.target.value)}
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

const Sports = (props) => {
  const { getSports, postSport, putSport, sportsReducer } = props;
  const { sports, loading } = sportsReducer;

  const [open, setOpen] = useState(false);

  const fetchSports = async () => {
    await getSports();
  };

  useEffect(() => {
    document.title = "Sports - Catalog";
    fetchSports();
  }, []);

  useEffect(() => {
    console.log("sports", sports);
  }, [sports]);

  return (
    <Body title={"Catalog - Sports"}>
      {loading ? (
        <Loading />
      ) : (
        <div className="catalog_grid">
          {sports?.length > 0 &&
            sports.map((sport) => (
              <SportCard sport={sport} key={sport.id} putSport={putSport} />
            ))}
          <Card className="sports__add">
            <Button
              variant="contained"
              color="success"
              onClick={() => setOpen(true)}
            >
              <h2>Add Sport</h2>
            </Button>
          </Card>
          <NewSport open={open} postSport={postSport} setOpen={setOpen} />
        </div>
      )}
    </Body>
  );
};

const mapStateToProps = ({ sportsReducer }) => ({
  sportsReducer,
});

const mapDispatchToProps = {
  ...sportActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sports);
