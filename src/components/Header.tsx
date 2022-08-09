/** @jsxImportSource @emotion/react */
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { noDecoration } from './Desks.module.style';

export function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/" css={noDecoration}>
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
        <Link to="/admin" css={noDecoration}>
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
