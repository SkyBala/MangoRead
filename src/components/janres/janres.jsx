import { Box } from '@mui/system'
import React from 'react'
import ChekBox from '../../ui/filterComp/ChekBox'

function Janres() {
  let chek = []
  for (let i = 0; i < 50; i++) {
    chek.push(i)    
} 
  return (
    <Box sx ={{
        height:"515px",
      overflow:"auto",
      overflowY:"scroll",
    }}>
        {chek.map (() => {
            return(<ChekBox/>)
        })}
    </Box>
  )
}

export default Janres