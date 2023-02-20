import { Box } from '@mui/system'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

function ChekBox() {
  return (
    <Box sx ={{
        display:"flex",
        justifyContent:"flex-start",
        flexDirection:"row",
        width:"314px",
        height:"35px",
        alignItems:"center",
        paddingBottom:"10px",
    }}>
    <Checkbox defaultChecked color="success" />
    <Typography>janre</Typography>
          
    </Box>
  )
}

export default ChekBox