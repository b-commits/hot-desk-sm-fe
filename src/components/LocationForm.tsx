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

export function LocationForm() {
  const [open, setOpen] = useState<boolean>(false);
  const [locatioName, setLocationName] = useState<string | null>(null);
  const [errorName, setErrorName] = useState<{ name: string }>();
  const [dateStart, setDateStart] = useState<Date | null>();
  const [dateEnd, setDateEnd] = useState<Date | null>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const validateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setErrorName({ name: '' });
    setLocationName(value);
    if (value.length < 5) {
      setErrorName({ name: 'Name must be at least five characters long' });
    }
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
            onChange={validateName}
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            type="text"
            fullWidth
            error={!isEmpty(errorName)}
            helperText={'abc'}
            variant="standard"
            required
          />
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
