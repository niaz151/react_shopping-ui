import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
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

  // === STATE HOOKS ===
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [sorting_method, setSortingMethod] = React.useState('');
  const [size, setSize] = React.useState('');

  // === EVENT HANDLERS ===
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  const handleSortingMethodChange = (event) => {
    setSortingMethod(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleFilterRequest = () => {
    console.log(category);
    console.log(sorting_method);
    console.log(size);
  }

  return (
    <div className='filterbar-container'>

      {/* CATEGORY FILTER */}
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Category</InputLabel>
        <Select
          id="demo-customized-select"
          value={category}
          onChange={handleCategoryChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"Shirts"}>Shirts</MenuItem>
          <MenuItem value={"Pants"}>Pants</MenuItem>
          <MenuItem value={"Coats"}>Coats</MenuItem>
        </Select>
      </FormControl>

    {/* SIZE FILTER */}
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Size</InputLabel>
        <Select
          id="demo-customized-select"
          value={size}
          onChange={handleSizeChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"Small"}>Small</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Large"}>Large</MenuItem>
        </Select>
      </FormControl>


      {/* PRICE FILTER */}
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Sort By</InputLabel>
        <Select
          id="demo-customized-select"
          value={sorting_method}
          onChange={handleSortingMethodChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"Ascending"}>Price: Ascending</MenuItem>
          <MenuItem value={"Descending"}>Price: Descending</MenuItem>
        </Select>
      </FormControl>
      
      <Button variant="contained" color="primary" onClick={handleFilterRequest}>
        Filter
      </Button>

    </div>
  );
}