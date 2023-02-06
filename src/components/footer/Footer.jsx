import { Container } from '@mui/material'
import { staticFooter } from '../../ui/static/static'
import classes from './Footer.module.css'
import { FooterMap } from '../../ui/footerComp/FooterMap'

function Footer() {
  return (
    <footer>
      <Container disableGutters width='lg'>
        <div className={classes.footerInner1}>
          <a
            href=''
            style={{
              textDecoration: 'none'
            }}
          >
            <div className={classes.footerLogo}>
              <img src={staticFooter.logohead} alt='logotipIcon' />
              <div className={classes.logoText}>
                <span>{staticFooter.siteName}</span>
                <p>{staticFooter.slogan}</p>
              </div>
            </div>
          </a>
          
          <FooterMap />
        </div>
      </Container>
      <div className={classes.footerInner2}>
        <div className={classes.line}></div>
        <div className={classes.posInner}>
          <h6>{staticFooter.reserv}</h6>
          <div className={classes.servLinks}>
            {staticFooter.serviceLinks.map(item => (
              <a key={item.title} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer