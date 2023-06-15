import React from "react";

import { Dialog, DialogTitle } from "@mui/material";

const Modal = ({ children, title, onClose, open }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export default Modal;
