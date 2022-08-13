import { css } from '@emotion/react';

const primary = css({ color: '#1876D1' });

const hotpink = css({
  color: 'hotpink',
});

export const noDecoration = css({
  textDecoration: 'none',
  color: 'white',
});

export const tableWrapper = css({
  margin: '8%',
  overflow: 'hidden',
});

export const tableWrapperLocation = css({
  marginLeft: '8%',
  marginTop: '8%',
  marginRight: '8%',
  overflow: 'hidden',
});

export const searchBar = css({
  width: '100%',
  marginBottom: '10px',
  marginLeft: '10px',
});

export const iconButton = css({
  cursor: 'pointer',
  color: '#2979ff',
});

export const datePicker = css({
  width: '100%',
  marginTop: '15px',
});

export const deleteIcon = css({
  color: '#1876D1',
  cursor: 'pointer',
  '&:hover,&:focus': hotpink,
});

export const editIcon = css({
  marginTop: '2px',
  color: '#1876D1',
  cursor: 'pointer',
  '&:hover,&:focus': hotpink,
});

export const addButton = css({
  marginTop: '15px',
});

export const tableHeader = css({
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover,&:focus': primary,
});

export const formAlert = css({
  marginTop: '15px',
});
