import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux';

const Header = () => {

  const num_cart_items = useSelector( state => state['shopping_cart'].num_items);

  return (
    <div>
      <AppBar position="static" style={{margin:0, padding:0}}>
        <Toolbar>

          <Typography variant="h6" noWrap>
            Shopping Site
          </Typography>
          
          <div style={{flexGrow:1}} />

          <div>
            <IconButton color="inherit">
              <Badge badgeContent={num_cart_items} color="secondary">
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