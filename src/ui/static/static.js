//header
import logohead from '../../img/logo.svg'
import search from '../../img/material-symbols_search-rounded.svg'


//footer
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

//modal
import XIcon from '@mui/icons-material/Close';

export const staticHeader = {
  logohead,
  siteName: 'MangoRead',
  slogan: 'Читай мангу с нами',
  search,
  placeHold: 'Placeholder',
  buttons: {
    signIn: 'Войти',
    singUp: 'регистрация'
  }
}

export const staticFooter = {
  logohead,
  siteName: 'MangoRead',
  slogan: 'Читай мангу с нами',
  FooterLinks: [
    {
      icon:<FacebookIcon
      sx={{
        width: 24,
        height: 24,
        color: 'secondary.forIcon',
        background: '#FFFFFF'
      }}
    />,
      title: 'Link One',
      url: 'https://t.me/karafacee1'
    },
    {
      icon: (
        <InstagramIcon
          sx={{
            width: 24,
            height: 24,
            color: 'secondary.forIcon',
            background: '#FFFFFF'
          }}
        />
      ),
      title: 'Link Two',
      url: 'https://www.instagram.com/16.185.112/'
    },
    {
      icon: (
        <TwitterIcon
          sx={{
            width: 24,
            height: 24,
            color: 'secondary.forIcon',
            background: '#FFFFFF'
          }}
        />
      ),
      title: 'Link Three',
      url: 'https://t.me/karafacee1'
    }
  ],
  reserv: '©2022, All right reserved.',
  serviceLinks: [
    {
      title: 'Privacy Policy',
      url: 'https://t.me/karafacee1'
    },
    {
      title: 'Terms of Service',
      url: 'https://t.me/karafacee1'
    },
    {
      title: 'Cookies Settings',
      url: 'https://t.me/karafacee1'
    }
  ]
}
export const FilterComp = {
  clear:{
    title:'Сбросить',
  },
  apply:{
    title:'Применить',
  }
}
export const staticModal ={
 XIcon,
  singIn:'Вход',
  singUp:'Регистрация',
  addImg:'добавить фото',
  SignInForm:{
      checkBox:'Запомнить меня',
      inp1:'username',
      inp2:'password',
      btn:'Войти'
  },
  SignUpform:{
      username:'username',
      nickname:'nickname',
      image:'image_file',
      password:'password',
      errorLength:'Ensure this field has at least 10 characters.',
      erroPassord:'Ensure this field has at least 8 characters.',
      errorField:'This field may not be blank.',
      errorImg:'Submit photo'
  }
}

