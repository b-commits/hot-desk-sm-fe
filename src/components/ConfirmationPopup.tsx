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
import { deleteLocation } from '../features/desk/api/locationApi';
import { deleteDesk } from '../features/desk/api/deskApi';
import { Desk, Location, Reservation } from '../features/desk/defintions/types';

interface Props {
  resource: Location | Reservation | Desk;
}

export const ConfirmationPopup = ({ resource }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleClickOpen: () => void = () => {
    setOpen(true);
  };

  const handleClose: () => void = () => {
    setOpen(false);
  };

  const handleDelete: () => void = () => {
    if ('locationId' in resource) {
      dispatch(deleteDesk(resource));
    }
    if ('city' in resource) {
      dispatch(deleteLocation(resource));
    }
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
        Delete
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Are you sure you want to delete this item?`}</DialogTitle>
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
