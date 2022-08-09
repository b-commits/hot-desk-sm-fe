/** @jsxImportSource @emotion/react */
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableWrapper, searchBar, tableHeader } from './Desks.module.style';
import { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { ReservationForm } from './ReservationForm';
import { AddDeskForm } from './AddDeskForm';

const mockDesks = [
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: true,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: true,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: true,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
  {
    deskId: 1,
    status: false,
    dateStart: Date.now(),
    dateEnd: Date.now(),
    location: 'Warsaw',
  },
];

interface Column {
  id: 'deskId' | 'status' | 'dateStart' | 'dateEnd' | 'location';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'deskId', label: 'Desk ID', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 100 },
  {
    id: 'dateStart',
    label: 'Start date',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'dateEnd',
    label: 'End date',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

export function DeskList() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const DEFAULT_PAGE: number = 0;

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(DEFAULT_PAGE);
  };

  return (
    <Paper css={tableWrapper}>
      <TextField
        id="searchByProductName"
        label="Find your hot-desk now..."
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
            {mockDesks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((desk) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={desk.deskId}
                    css={
                      desk.status === false
                        ? { backgroundColor: 'whitesmoke' }
                        : {}
                    }
                  >
                    {columns.map((column) => {
                      if (desk[column.id] === false) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            Taken
                          </TableCell>
                        );
                      }
                      if (desk[column.id] === true) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            Available
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {desk[column.id]}
                        </TableCell>
                      );
                    })}
                    {desk.status === false ? (
                      <TableCell />
                    ) : (
                      <TableCell>
                        <ReservationForm />
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddDeskForm />
      <TablePagination
        rowsPerPageOptions={[10, 15, 30]}
        component="div"
        count={mockDesks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
