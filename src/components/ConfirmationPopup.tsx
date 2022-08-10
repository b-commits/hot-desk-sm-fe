/** @jsxImportSource @emotion/react */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

interface Props {
  id: string;
  name?: string;
}

export const ConfirmationPopup = ({ id, name }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen: () => void = () => {
    setOpen(true);
  };

  const handleDelete: () => void = () => {
    // dispatch(deleteLocation(id));
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleClickOpen}
        color="error"
        variant="outlined"
        css={{ marginTop: '10px', marginBottom: '20px', marginLeft: '10px' }}
      >
        DELETE LOCATION
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Are you sure you want to delete ${name} [${id}]?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please remember that all changes are permanent. You will not be able
            to restore the deleted entry.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
