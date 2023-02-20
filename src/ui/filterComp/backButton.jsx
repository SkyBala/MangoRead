import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Box, Button, Typography} from "@mui/material"
import { backButtonStyle } from './muiFilterStyle';

function BackButton() {
  return (
    <Box sx={{
        width: "400px",
        height: "70px",
        display:"flex",
        justifyContent:"flex-start",
        marginLeft:"-20px",
        marginTop:"-20px",
    }}>
    <Button sx={backButtonStyle} color="info">
    <ArrowBackIosIcon/>
    <Typography>Назад</Typography>
    </Button>
    </Box>
  )
}

export default BackButton