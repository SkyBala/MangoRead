import { Container } from '@mui/material';
import { staticHeader } from '../../ui/static/static';
import classes from './Header.module.css';

import InputHeader from '../../ui/headerComp/input';
import {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthSucces from '../../components/authSucces/AuthSucces';
import AuthMode from '../../components/authMode/AuthMode';
function Header() {

  const dispatch = useDispatch();


  
  const { account } = useSelector((state) => state.authReducer);
  const [isLogined, setIsLogined] = useState(false);
  useEffect(() => {
    setIsLogined(account);
  }, [dispatch, account]);

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

    <div className={classes.authStyles}>
          
          
          {isLogined === true ? <AuthSucces/> : <AuthMode/>}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;