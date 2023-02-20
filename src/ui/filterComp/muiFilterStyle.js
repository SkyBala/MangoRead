//  отдельный файл для хранения стилей mui
export const backButtonStyle = {
    width: "400px",
    height: "70px",
    padding: '17px',
    color: "#878787",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '35px',
    borderTopLeftRadius: "18px",
    borderTopRightRadius: "18px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"center", 
    '&:hover':{
        background:'#878787',
        color: 'black'
    },
    "&:active":{
        background:"white"
    },
    "& span:active":{
        background:"white",
    }
}
export const doubleFilterButton = {
    color:'#FFFFFF',
    background: '#AD02E0',
    borderRadius: '8px',
    width: 174,
    height: 52,
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