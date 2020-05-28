import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import '../styles/FilterBar.css';

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    width: "120px",
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function FilterBar() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [sorting_method, setSortingMethod] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  const handleSortingMethodChange = (event) => {
    setSortingMethod(event.target.value);
  };

  return (
    <div className='filterbar-container'>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Category</InputLabel>
        <Select
          id="demo-customized-select"
          value={category}
          onChange={handleCategoryChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Shirts</MenuItem>
          <MenuItem value={20}>Pants</MenuItem>
          <MenuItem value={30}>Coats</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Sort By</InputLabel>
        <Select
          id="demo-customized-select"
          value={sorting_method}
          onChange={handleSortingMethodChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Price: Ascending</MenuItem>
          <MenuItem value={20}>Price: Descending</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}