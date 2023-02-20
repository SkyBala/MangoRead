import { Button } from '@mui/material'
import React from 'react'
import { doubleFilterButton } from './muiFilterStyle'
import { FilterComp } from '../static/static'
function ClearButton() {
  return (
    <Button  sx={doubleFilterButton}>{FilterComp.clear.title}</Button>
  )
}

export default ClearButton

