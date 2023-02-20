//  отдельный файл для хранения стилей mui

//Тут все стилизация которая находиться в папке headerComponents
export const SignInButtonStyle = {
    width: 142,
    height: 50,
    border: '2px solid #AD02E0',
    borderRadius: '8px',
    color: '#000000',
    '&:hover':{
        background:'#AD02E0',
        boxShadow: '0px 0px 20px #AD02E0',
        color: '#FFFFFF'
    },
    '&:focus':{
        border:'none',
        background: '#740994',
        boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25)',
        color: '#FFFFFF'
    }
}



export const InputHeaderStyle ={
    background: '#FFFFFF',
    border: '2px solid #878787',
    borderRadius: '8px',
    width: 342,
    height: 56,
    paddingLeft:2,
    fontFamily: 'Montserrat,sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '24px',
    '&.Mui-focused':{
        border:'2px solid #AD02E0',
        color:'#AD02E0',
       
        '& .MuiSvgIcon-root':{
            display:'none',
        },
        '& .MuiInputBase-input':{
        paddingLeft:0
    },
    },
    '& .MuiInputBase-input':{
        paddingLeft:2
    },
    '& .MuiInputBase-input::placeholder':{
        fontFamily: 'Montserrat,sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '24px',
        color: '#919191',
    }
}
export const SignUpButtonStyle ={
    color:'#FFFFFF',
    background: '#AD02E0',
    borderRadius: '8px',
    width: 206,
    height: 50,
    '&:hover':{
    background:'#AD02E0',
    boxShadow: '0px 0px 20px #AD02E0',
    color: '#FFFFFF'
},
'&:focus':{
    background: '#740994',
    boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25)',
    color: '#FFFFFF'
}
}
