/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <AppBar sx={{ mb: '10rem' }}>
      <Toolbar>
        <Link
          to="/"
          css={{ textDecoration: 'none', color: 'white', marginLeft: '1rem' }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Typography fontSize={'1.2rem'} noWrap component="div">
              Book a Desk
            </Typography>
          </IconButton>
        </Link>
        <Link
          to="/admin"
          css={{ textDecoration: 'none', color: 'white', marginLeft: '1rem' }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Typography fontSize={'1.2rem'} noWrap component="div">
              Admin Panel
            </Typography>
          </IconButton>
        </Link>
        <a
          href="https://hotdesk-api.azurewebsites.net/swagger/index.html"
          css={{ textDecoration: 'none', color: 'white', marginLeft: '1rem' }}
        >
          <Typography fontSize={'1.2rem'} noWrap component="div">
            API docs
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
