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
import { useAppDispatch } from '../app/hooks';
import { deleteLocations } from '../features/desk/api/deskApi';
import { Location } from '../features/desk/defintions/types';

export const ConfirmationPopup = ({ id, city }: Location) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClickOpen: () => void = () => {
    setOpen(true);
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };

  const handleDelete: () => void = () => {
    dispatch(
      deleteLocations({
        id: id,
        city: city,
      })
    );
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
        <DialogTitle>{`Are you sure you want to delete ${city} [${id}]?`}</DialogTitle>
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
