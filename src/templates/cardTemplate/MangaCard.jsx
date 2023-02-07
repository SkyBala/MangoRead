import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Card from '../../components/card/Card'

function MangaCard() {
  const since = []
  for (let i = 0; i < 12; i++) {
    since.push(i);
    
  }
  return (
  
    <Box
      sx={{
        display:'flex',
        flexWrap:"wrap",
        width:"820px",
        height:"700px",
        justifyContent:"space-between",
        padding:"0px",
      }}>   
  {since.map(() => {
     return<Card />
    })
    }
    </Box>
  

  )
}

export default MangaCard