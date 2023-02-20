//hooks

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


//dowload componets
// import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';


//components
import Card from '../../components/card/Card'


//api 
import { getMangas } from '../../store/MangaSlice';
function MangaCard(props) {
  const dispatch = useDispatch()
  const manga = useSelector(state => state.mangaReducer.mangas)



  useEffect(() => {
    dispatch(getMangas())
  }, [dispatch]);

  return (
  
    <Box
      sx={{
        display:'flex',
        flexWrap:"wrap",
        width:"820px",
        height:"700px",
        justifyContent:"space-between",
        padding:"0px",
        marginLeft:"20px",
      }}>   
   {manga ? manga.map((item) =>{
                      {/* <NavLink to={`/${item.id}`} info={{image : item.image}}>
                       */}
                        return(  <Card key={item} post={{image : item?.image , year: item?.issue_year, name : item?.ru_name}} />)
                        {/* </NavLink> */}
   })
                        :
          <>Uno Momento</>}
    </Box>
  

  )
}

export default MangaCard