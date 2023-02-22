import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux';
import {
    infoModalOpen,
    AuthModalTabs,
  } from "../../store/Modalslice.js";
  import Modals from '../../templates/modal/Modal.jsx';
import SignInButton from '../../ui/headerComp/SingInButton.jsx';
 
  import SignUpButton from '../../ui/headerComp/SingUpButton';
function AuthMode() {

    const dispatch = useDispatch()

    const loginTabOpen = () => {
        dispatch(infoModalOpen(0));
        dispatch(AuthModalTabs(0));
      };
      const registerTabOpen = () => {
        dispatch(AuthModalTabs(1));
        dispatch(infoModalOpen(1));
        console.log("hello");
      };
    
    
  return (
    <Box sx={{
        width: '363px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
         <SignInButton onClick={loginTabOpen}/> 
            <SignUpButton onClick={registerTabOpen}/>
      <Modals/>
    </Box>
  )
}

export default AuthMode