import React, { useEffect, useState } from "react";
import Body from "../CatalogBody";
import Loading from "../Loading";

import useLeagues from "../../services/leagues";

const Leagues = () => {
  const { fetchLeagues } = useLeagues();

  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Catalog - Leagues";
    setLoading(true);
    fetchLeagues()
      .then((data) => {
        setLeagues(data);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Body title={"Catalog - Leagues"}>
      <h1>Leagues</h1>
      {
        loading && <Loading />
      }
    </Body>
  );
};

export default Leagues;
