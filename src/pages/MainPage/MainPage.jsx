//hooks
import React from 'react'
//style
import classes from "./MainPage.module.css"
import { Box } from '@mui/system'

//componemts and templates
import Filter from '../../templates/filter/Filter'
import Header from '../../templates/header/Header'
import Footer from '../../templates/footer/Footer'
import MangaCard from '../../templates/cardTemplate/MangaCard'
import MainPagination from '../../ui/filterComp/pagination'


function MainPage() {
  return (
    <div >
    <Header/>
    <div className={classes.Main}>
      <Box sx={{
        width:"1240px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
              }}>
        <Filter/>
        
        <MangaCard/>
        
      </Box>
      <Box>
              <MainPagination/>
      </Box>
    </div>
    <Footer/>
    </div>
  )
}

export default MainPage