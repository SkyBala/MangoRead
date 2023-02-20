import { Box } from '@mui/system'
import React from 'react'
import BackButton from '../../ui/filterComp/backButton'
import Janres from '../../components/janres/janres'
import ApplyButton from '../../ui/filterComp/applyButton'
import ClearButton from '../../ui/filterComp/clearButton'
function Filter() {
  return (
    <Box sx={{
        width: '360px',
        height: '700px',
        borderRadius:"20px",
        border:"1px solid purple",
        padding:"20px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        "& span":{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '35px',
       
          textAlign:"start",
          "& h3":{
            margin:0,
          }
        }
    }}>
    <BackButton/>
    <span><h3>Жанры </h3></span>
    <Janres/>
    <Box sx ={{
      display:"flex",
      justifyContent:"space-around",
      alignItems:"center",
      height:"72px",
    }}>
      <ApplyButton/>
      <ClearButton/>
    </Box>
    </Box>
  )
}

export default Filter