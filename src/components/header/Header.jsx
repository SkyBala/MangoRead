import { Container } from '@mui/material';
import { staticHeader } from '../../ui/static/static';
import classes from './Header.module.css';
import SingInButton from '../../ui/headerComp/SingInButton';
import SignUpButton from '../../ui/headerComp/SingUpButton';
import InputHeader from '../../ui/headerComp/input';

function Header() {
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
              <SingInButton/>
              <SignUpButton/>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;