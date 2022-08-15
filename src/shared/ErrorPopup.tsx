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
import { clearError as clearLocation } from '../features/desk/redux/locationSlice';
import { clearError as clearDesk } from '../features/desk/redux/deskSlice';

interface Props {
  errorMsg: string | undefined;
}

export const ErrorPopup = ({ errorMsg }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleClose: () => void = () => {
    setOpen(false);
    dispatch(clearLocation());
    dispatch(clearDesk());
  };

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Something went wrong</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {errorMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
