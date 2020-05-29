import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import '../styles/FilterBar.css';
import { useDispatch } from 'react-redux';

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


export default function FilterBar() {

  // === HOOKS ===
  const [category, setCategory] = React.useState('');
  const [sorting_method, setSortingMethod] = React.useState('');
  const [size, setSize] = React.useState('');
  const dispatch = useDispatch();


  // === CATEGORY HANDLER ===
  const handleCategoryChange = (event) => {

    setCategory(event.target.value);
    var endpoint;
   
    // IF NO FILTER , SHOW ALL PRODUCTS 
    (event.target.value === '')?
      endpoint = `http://localhost:8080/api/v1/products/getAllProducts`:
      endpoint = `http://localhost:8080/api/v1/products/getProductsByCategoryId/${event.target.value}`;
    
    // FETCH REQUEST TO API
    fetch(endpoint)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({type:'UPDATE_DATA', payload: data})
    }) 
  };
  
  // === SORTING HANDLER ===
  const handleSortingMethodChange = (event) => {
    setSortingMethod(event.target.value);
    var endpoint;
   
    // IF NO FILTER , SHOW ALL PRODUCTS 
    (event.target.value === '')?
      endpoint = `http://localhost:8080/api/v1/products/getAllProducts`:
      endpoint = `http://localhost:8080/api/v1/products/getProductsByPrice/${event.target.value}`;
  
    // FETCH REQUEST TO API
    fetch(endpoint)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({type:'UPDATE_DATA', payload: data})
    }) 
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    var endpoint;
   
    // IF NO FILTER , SHOW ALL PRODUCTS 
    (event.target.value === '')?
      endpoint = `http://localhost:8080/api/v1/products/getAllProducts`:
      endpoint = `http://localhost:8080/api/v1/products/getProductsBySize/${event.target.value}`;
  
    // FETCH REQUEST TO API
    fetch(endpoint)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({type:'UPDATE_DATA', payload: data})
    }) 
  };

  return (
    <div className='filterbar-container'>

      {/* CATEGORY FILTER */}
      <FormControl className='filterbar-form'>
        <InputLabel id="demo-customized-select-label">Category</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>Shorts</MenuItem>
          <MenuItem value={2}>Shirts</MenuItem>
          <MenuItem value={3}>Sweater</MenuItem>
          <MenuItem value={4}>Coats</MenuItem>
        </Select>
      </FormControl>

    {/* SIZE FILTER */}
      <FormControl className='filterbar-form'>
        <InputLabel id="demo-customized-select-label">Size</InputLabel>
        <Select
          value={size}
          onChange={handleSizeChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={1}>Small</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>Large</MenuItem>
        </Select>
      </FormControl>


      {/* PRICE FILTER */}
      <FormControl className='filterbar-form'>
        <InputLabel id="demo-customized-select-label">Sort By</InputLabel>
        <Select
          value={sorting_method}
          onChange={handleSortingMethodChange}
          input={<BootstrapInput />}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={"ascending"}>Price: Ascending</MenuItem>
          <MenuItem value={"descending"}>Price: Descending</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}