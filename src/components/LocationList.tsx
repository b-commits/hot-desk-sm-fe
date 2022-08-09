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
import {
  tableWrapper,
  searchBar,
  tableHeader,
  tableWrapperLocation,
} from './Desks.module.style';
import { Button, Grid } from '@mui/material';
import { LocationForm } from './LocationForm';
import ConfirmationPopup from './ConfirmationPopup';

const mockLocations = [
  {
    locationId: 1,
    city: 'Toronto',
  },
  {
    locationId: 2,
    city: 'Calgary',
  },
  {
    locationId: 3,
    city: 'Vancouver',
  },
  {
    locationId: 4,
    city: 'Ottawa',
  },
];

interface Column {
  id: 'locationId' | 'city';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'locationId', label: 'Location ID' },
  { id: 'city', label: 'City' },
];

export function LocationList() {
  return (
    <Paper css={tableWrapperLocation}>
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
            {mockLocations.map((location) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={location.locationId}
                >
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {location[column.id]}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <ConfirmationPopup />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <LocationForm />
    </Paper>
  );
}
