/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectLocations } from '../../redux/locationSlice';
import { postDesk } from '../../api/deskApi';

export function AddDeskForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLocationId, setSelectedLocationId] = useState<string>('');
  const dispatch = useAppDispatch();
  const locations = useAppSelector(selectLocations);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLocationId(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(postDesk(selectedLocationId));
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        css={{ marginTop: '10px', marginBottom: '20px', marginLeft: '10px' }}
      >
        Add a new desk
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a new location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            In order to add a new location, please set the location and hit
            'Save'.
          </DialogContentText>
          <FormControl fullWidth css={{ marginTop: '15px' }}>
            <InputLabel id="demo-simple-select-label">HQ</InputLabel>
            <Select
              value={selectedLocationId}
              label="Location"
              onChange={handleChange}
            >
              {locations.map((location) => {
                return (
                  <MenuItem key={location.id} value={location.id}>
                    {location.city}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
