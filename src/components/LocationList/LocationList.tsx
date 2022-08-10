/** @jsxImportSource @emotion/react */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import { tableHeader, tableWrapperLocation } from '../Desks.module.style';
import { LocationForm } from '../LocationForm';
import { ConfirmationPopup } from '../ConfirmationPopup';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectLocations,
  selectStatus,
} from '../../features/desk/redux/locationSlice';
import { getLocations } from '../../features/desk/api/deskApi';
import { shallowEqual } from 'react-redux';

interface Column {
  id: 'id' | 'city';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'Location ObjectID' },
  { id: 'city', label: 'City' },
];

export function LocationList() {
  const dispatch = useAppDispatch();
  const locations = useAppSelector(selectLocations);

  useEffect(() => {
    dispatch(getLocations());
  }, []);

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
            {locations.map((location) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={location.id}>
                  {columns.map((column) => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {location[column.id]}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <ConfirmationPopup id={location.id} city={location.city} />
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
