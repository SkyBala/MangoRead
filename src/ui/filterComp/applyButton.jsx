import { Button } from '@mui/material'
import React from 'react'
import { doubleFilterButton } from './muiFilterStyle'
import { FilterComp } from '../static/static'
function CpplyButton() {
  return (
   <Button  sx={doubleFilterButton}>{FilterComp.apply.title}</Button>
  )
}

export default CpplyButton