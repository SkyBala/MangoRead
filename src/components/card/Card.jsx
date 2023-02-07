import { Box, Typography } from '@mui/material'
// import { Link } from 'react-router-dom'
import konosuba from "../../img/imgkonosuba.png"
function Card({ item }) {
  return (
      <Box
        sx={{
          width: '190px',
          height: '220px',
          cursor: 'pointer',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.73%, rgba(0, 0, 0, 0.5) 66.15%), url(${konosuba})no-repeat center/cover`,
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color:"white",
          '& .MuiTypography-root': {
            mb: '11px'
          }
        }}
      >
        <Typography variant='cardYear'>Год: 2017</Typography>

        <Typography variant='cardName'>konosuba</Typography>
      </Box>

  )
}

export default Card