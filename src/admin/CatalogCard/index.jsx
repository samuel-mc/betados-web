import { Card, CardContent, CardActions, Button } from "@mui/material";
import React from "react";

const CatalogCard = ({ children, handleEdit, handleDelete }) => {
  return (
    <Card>
      <CardContent className="catalog__card">{children}</CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CatalogCard;
