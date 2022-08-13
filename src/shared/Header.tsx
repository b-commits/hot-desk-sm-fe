/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/" css={{ textDecoration: 'none', color: 'white' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Typography variant="h6" noWrap component="div">
              Book a Desk
            </Typography>
          </IconButton>
        </Link>
        <Link to="/admin" css={{ textDecoration: 'none', color: 'white' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 4 }}
          >
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </IconButton>
        </Link>
        <a
          href="https://hotdesk-api.azurewebsites.net/swagger/index.html"
          css={{ textDecoration: 'none', color: 'white' }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            css={{ marginLeft: '80px ' }}
          >
            API docs
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
