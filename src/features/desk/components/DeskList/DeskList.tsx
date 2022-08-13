/** @jsxImportSource @emotion/react */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import {
  searchBar,
  tableHeader,
  tableWrapperLocation,
} from '../Desks.module.style';
import { ConfirmationPopup } from '../../../../shared/ConfirmationPopup';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getDesks } from '../../api/deskApi';
import {
  selectDeskIdsByLocationName,
  selectStatus,
} from '../../redux/deskSlice';
import { AddDeskForm } from './DeskForm';
import DeskTableCell from './DeskTableCell';
import { ReservationForm } from '../ReservationGrid/ReservationForm';
import { CircularProgress, TextField } from '@mui/material';
import { HTTP_Status } from '../../definitions/types';

interface Props {
  reservationVariant?: boolean;
}

interface Column {
  id: 'id' | 'locationId';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'Desk ID' },
  { id: 'locationId', label: 'Desk located in' },
];

export function DeskList({ reservationVariant }: Props) {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>();
  const filteredDesks = useAppSelector(selectDeskIdsByLocationName(searchTerm));
  const desksStatus = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getDesks());
  }, [dispatch]);

  return (
    <Paper css={tableWrapperLocation}>
      {desksStatus === HTTP_Status.PENDING ? (
        <CircularProgress />
      ) : (
        <>
          {' '}
          <TextField
            id="searchByCity"
            label="Search desk by a city..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            variant="standard"
            css={searchBar}
          />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      css={tableHeader}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDesks.map((desk) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={desk.id}>
                      {columns.map((column) => {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'locationId' ? (
                              <DeskTableCell desk={desk} />
                            ) : (
                              desk[column.id]
                            )}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        {reservationVariant ? (
                          <ReservationForm desk={desk} />
                        ) : (
                          <ConfirmationPopup resource={desk} />
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {!reservationVariant && <AddDeskForm />}
        </>
      )}
    </Paper>
  );
}
