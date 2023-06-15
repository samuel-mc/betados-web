import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  DialogActions,
  DialogContent,
} from "@mui/material";
import useCatalog from "../../hooks/useCatalog";
import Loading from "../Loading";
import Modal from "../Modal";

const SportCard = ({ sport, setLoading }) => {
  const [open, setOpen] = useState(false);
  const [sportName, setSportName] = useState(sport.name);
  const [sportLogo, setSportLogo] = useState(sport.logo);

  const { updateSport } = useCatalog();

  const handleSave = async () => {
    setOpen(false);
    setLoading(true);
    const sportUpdated = {
      ...sport,
      name: sportName,
      logo: sportLogo,
    };
    await updateSport(sportUpdated);
    sport.name = sportName;
    sport.logo = sportLogo;
    setLoading(false);
  };

  return (
    <>
      <Card>
        <CardContent className="sport__card">
          <h2>{sport.name}</h2>
          <img src={sport.logo} alt={sport.name} />
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <Button color="primary" onClick={() => setOpen(true)}>
            Edit
          </Button>
          <Button color="error">Delete</Button>
        </CardActions>
      </Card>
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

const NewSport = ({ open, setOpen }) => {
  const [sportName, setSportName] = useState("");
  const [sportLogo, setSportLogo] = useState("");

  const { createSport } = useCatalog();

  const handleSave = async () => {
    setOpen(false);
    const sport = {
      name: sportName,
      logo: sportLogo,
    };
    await createSport(sport);
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

const Sports = () => {
  const { fetchSports } = useCatalog();

  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchSports()
      .then((data) => {
        setSports(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    document.title = "Sports - Catalog";
  }, []);

  return (
    <>
      <h1>Catalog - Sports</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="sports__grid">
          {sports.map((sport) => (
            <SportCard sport={sport} key={sport.id} setLoading={setLoading} />
          ))}
          <Card className="sports__add">
            <Button variant="contained" color="success" onClick={()=>setOpen(true)}>
              <h2>Add Sport</h2>
            </Button>
          </Card>
          <NewSport open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
};

export default Sports;
