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
import { clearError } from '../features/desk/redux/locationSlice';

interface Props {
  errorMsg: string | undefined;
}

export const ErrorPopup = ({ errorMsg }: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleClose: () => void = () => {
    setOpen(false);
    dispatch(clearError());
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
