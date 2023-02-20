import { Box, Typography } from '@mui/material'
// import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <Box
        sx={{
          width: '190px',
          height: '220px',
          cursor: 'pointer',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.73%, rgba(0, 0, 0, 0.5) 66.15%), url(${props.post.image})no-repeat center/cover`,
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color:"white",
          marginBottom:"20px",
          textAlign:"start",
          '& .MuiTypography-root': {
            padding:"0 0 10px 10px",
          }
        }}
      >
        <Typography variant='cardYear'>Год:{props.post.year}</Typography>

        <Typography variant='cardName'>{props.post.name.slice(0,25)+'... '}</Typography>
      </Box>

  )
}

export default Card