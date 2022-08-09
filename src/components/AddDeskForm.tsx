/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  datePicker,
  addButton,
  formAlert,
  editIcon,
} from './Desks.module.style';
import { isEmpty } from 'lodash';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export function AddDeskForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [deskLocation, setDeskLocation] = useState<string | null>(null);
  const [errorName, setErrorName] = useState<{ name: string }>();
  const [dateStart, setDateStart] = useState<Date | null>();
  const [dateEnd, setDateEnd] = useState<Date | null>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        css={{ marginTop: '10px', marginBottom: '20px', marginLeft: '10px' }}
      >
        ADD A NEW DESK
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={' '}
              label="Age"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            type="submit"
            onClick={() => console.log('tu byl handle submit')}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
