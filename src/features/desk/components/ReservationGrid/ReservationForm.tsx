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
import { datePicker } from '../Desks.module.style';
import { FormControl } from '@mui/material';
import { useAppDispatch } from '../../../../app/hooks';
import { Desk, Reservation } from '../../definitions/types';
import { postReservation } from '../../api/reservationApi';

interface Props {
  desk: Desk;
}

export function ReservationForm({ desk }: Props) {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [dateStart, setDateStart] = useState<Date | null>(null);
  const [dateEnd, setDateEnd] = useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveReservation = () => {
    const reservation: Reservation = {
      deskId: desk.id,
      endDate: dateEnd!.toJSON(),
      startDate: dateStart!.toJSON(),
      name: name!,
      id: '',
    };
    dispatch(postReservation(reservation));
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} variant="outlined">
        Make a Reservation
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Make a reservation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            In order to make a reservation, please fill out the form and hit
            'Save'.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <FormControl fullWidth css={{ marginTop: '15px' }}></FormControl>
          <LocalizationProvider css={datePicker} dateAdapter={AdapterMoment}>
            <div css={datePicker}>
              <DatePicker
                label="Reservation Start Date"
                value={dateStart}
                onChange={(newValue) => {
                  setDateStart(newValue);
                }}
                renderInput={(params) => (
                  <TextField data-testid="picker" fullWidth {...params} />
                )}
              />
            </div>
          </LocalizationProvider>
          <LocalizationProvider css={datePicker} dateAdapter={AdapterMoment}>
            <div css={datePicker}>
              <DatePicker
                label="Reservation End Date"
                value={dateEnd}
                onChange={(newValue) => {
                  setDateEnd(newValue);
                }}
                renderInput={(params) => (
                  <TextField data-testid="picker" fullWidth {...params} />
                )}
              />
            </div>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={() => saveReservation()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
