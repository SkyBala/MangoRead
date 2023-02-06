
import SearchIcon from '@mui/icons-material/Search';
import {Input,InputAdornment } from '@mui/material';
import { InputHeaderStyle } from './muiHeadeStyle';




function InputHeader() {
  return (
    <Input
        id='inputHeader'
        placeholder='Placeholder'
        type='search'
        sx={InputHeaderStyle}
        disableUnderline={true}
        startAdornment={
        <InputAdornment position='start'>
            <SearchIcon sx={{
                width:24,
                height:24,
                color:'#000000'
            }}/>
        </InputAdornment>
      }
    />
  )
}

export default InputHeader