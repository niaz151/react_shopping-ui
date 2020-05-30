import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {ProductList} from './ProductList';

const Header = () => {

  const num_cart_items = useSelector( state => state['shopping_cart'].num_items);

  return (
    <div>
      <AppBar position="static" style={{margin:0, padding:0}}>
        <Toolbar>

          <Typography variant="h6" noWrap>
            <Link to='/' style={{textDecoration:"none", color:"white"}}> Shopping Site </Link>
          </Typography>
          
          <div style={{flexGrow:1}} />

          <div>
            <IconButton color="inherit">
              <Badge badgeContent={num_cart_items} color="secondary">
                <Link to='/cart' style={{textDecoration:"none", color:"white"}}> <ShoppingCartIcon /> </Link>
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;