import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  return (
    <div>
      <AppBar position="static" color={"red"} style={{margin:0, padding:0}}>
        <Toolbar>

          <Typography variant="h6" noWrap>
            Shopping Site
          </Typography>
          
          <div style={{flexGrow:1}} />

          <div>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;