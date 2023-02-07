import { staticFooter } from '../../../ui/static/static'
import classes from "../Footer.module.css"
function FooterLinks() {
  return (
    <div className={classes.FooterLinks}>
      {staticFooter.FooterLinks.map(item => (
        <a style={{ textDecoration: 'none' }} key={item.title} href={item.url}>
          <div className={classes.FooterLinks2}>
            {item.icon}
            <div className={classes.FooterLinksText}>{item.title}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default FooterLinks