import { Container } from '@mui/material';
import { staticHeader } from '../../ui/static/static';
import classes from './Header.module.css';
import SingInButton from '../../ui/headerComp/SingInButton';
import SignUpButton from '../../ui/headerComp/SingUpButton';
import InputHeader from '../../ui/headerComp/input';
import {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {
  infoModalOpen,
  AuthModalTabs,
} from "../../store/Modalslice";
import Modals from '../modal/Modal';

function Header() {

  const dispatch = useDispatch();

  const loginTabOpen = () => {
    dispatch(infoModalOpen());
    dispatch(AuthModalTabs(0));
  };
  const registerTabOpen = () => {
    dispatch(infoModalOpen());
    dispatch(AuthModalTabs(1));
  };
  useEffect(() =>{

   }, [dispatch]);
  
  return (
    <header>
      <Container disableGutters width='lg'>
        <div className={classes.headerInner}>
          <div className={classes.headerLogo}>
            <img src={staticHeader.logohead} alt='logotipIcon' />
            <div className={classes.logoText}>
              <span>{staticHeader.siteName}</span>
              <p>{staticHeader.slogan}</p>
            </div>
          </div>
          <InputHeader/>
          <div className={classes.buttons}>
          
      <SingInButton onClick={loginTabOpen}/>
              <Modals/>
      
        
              <SignUpButton onClick={registerTabOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;