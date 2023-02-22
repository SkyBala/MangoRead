
import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AuthSucces() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box 
    sx={{
      width:"269px",
      height:"80px",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-evenly",
    }}>
        <span>
          Alex Muler
        </span>
        <Box sx={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-around",
          alignItems:"center",
        }} >
        <Avatar sx={{
          width:"80px",
          height:"80px",
        }}>N</Avatar>
        <FormControl   variant="standard" color="secondary" sx={{width:24,height:24,}}>
        <Select
        disableUnderline={true}
        color="secondary"
        onChange={handleChange}
        >
          <MenuItem  value="">
            <em>Log Out</em>
          </MenuItem>
        </Select>
      </FormControl>
        </Box>
    </Box> 
     )
}

export default AuthSucces