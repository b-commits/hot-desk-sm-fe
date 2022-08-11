/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { postLocation } from '../../features/desk/api/locationApi';

export function LocationForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [city, setCityName] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveLocation = () => {
    dispatch(postLocation(city));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        css={{ marginTop: '10px', marginBottom: '20px', marginLeft: '10px' }}
      >
        ADD A NEW LOCATION
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a new location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            In order to add a new location, please provide its name and hit
            'Save'.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            onChange={(event) => setCityName(event.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={() => saveLocation()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
