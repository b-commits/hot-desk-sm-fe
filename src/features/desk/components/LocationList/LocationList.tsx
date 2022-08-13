/** @jsxImportSource @emotion/react */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { tableHeader, tableWrapperLocation } from '../Desks.module.style';
import { LocationForm } from './LocationForm';
import { ConfirmationPopup } from '../../../../shared/ConfirmationPopup';
import { useAppSelector } from '../../../../app/hooks';
import { selectLocations, selectStatus } from '../../redux/locationSlice';
import { HTTP_Status } from '../../definitions/types';
import { CircularProgress } from '@mui/material';

interface Column {
  id: 'city';
  label: string;
  minWidth?: 250;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [{ id: 'city', label: 'City' }];

export function LocationList() {
  const locations = useAppSelector(selectLocations);
  const locationStatus = useAppSelector(selectStatus);

  return (
    <Paper css={tableWrapperLocation}>
      {locationStatus === HTTP_Status.PENDING ? (
        <CircularProgress />
      ) : (
        <>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      css={tableHeader}
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {locations.map((location) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={location.id}
                    >
                      {columns.map((column) => {
                        return (
                          <TableCell key={column.id}>
                            {location[column.id]}
                          </TableCell>
                        );
                      })}
                      <TableCell>
                        <ConfirmationPopup resource={location} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <LocationForm />
        </>
      )}
    </Paper>
  );
}
