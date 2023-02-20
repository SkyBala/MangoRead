import { Box,Pagination } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getMangas } from '../../store/MangaSlice'
function MainPagination() {

const dispatch = useDispatch()

  return (
    <Box sx ={{
        width:"316px",
        height:"45px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",

    }}>
        <Pagination onChange={(e, value)=>  dispatch(getMangas(`offset=${(value -1) * 12 }`))} sx={{"& ul":{margin:0,}}}  defaultPage={1} boundaryCount={1} siblingCount={0} count = {20} color="success"></Pagination>
    </Box>
  )
}

export default MainPagination