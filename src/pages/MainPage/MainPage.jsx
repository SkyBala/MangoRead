//hooks
import React from 'react'
//style
import classes from "./MainPage.module.css"
import { Box } from '@mui/system'
//
//componemts and templates
import Filter from '../../templates/filter/Filter'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MangaCard from '../../templates/cardTemplate/MangaCard'
//

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
    </div>
    <Footer/>
    </div>
  )
}

export default MainPage