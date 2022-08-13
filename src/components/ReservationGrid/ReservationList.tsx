/** @jsxImportSource @emotion/react */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableWrapper, tableHeader } from '../Desks.module.style';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getReservations } from '../../features/desk/api/reservationApi';
import {
  selectReservations,
  selectStatus,
} from '../../features/desk/redux/reservationSlice';
import { HTTP_Status } from '../../features/desk/definitions/types';
import { CircularProgress } from '@mui/material';

interface Column {
  id: 'id' | 'name' | 'startDate' | 'endDate';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'Reservation ID', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'startDate',
    label: 'Start date',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'endDate',
    label: 'End date',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface Props {
  variant: 'user' | 'admin';
}

export function ReservationList({ variant }: Props) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const dispatch = useAppDispatch();
  const reservations = useAppSelector(selectReservations);
  const reservationStatus = useAppSelector(selectStatus);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <Paper css={tableWrapper}>
      {reservationStatus === HTTP_Status.PENDING ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) =>
                    column.id === 'name' && variant === 'user' ? null : (
                      <TableCell
                        css={tableHeader}
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    )
                  )}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((reservation) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={reservation.id}
                      >
                        {columns.map((column) => {
                          if (column.id === 'name' && variant === 'user')
                            return null;

                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id.toLowerCase().includes('date')
                                ? reservation[column.id].substring(0, 10)
                                : reservation[column.id]}
                            </TableCell>
                          );
                        })}
                        <TableCell />
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 15, 30]}
            component="div"
            count={reservations.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Paper>
  );
}
