import { Button } from "@mui/material"
import { SignInButtonStyle } from "./muiHeadeStyle"
import { staticHeader } from "../static/static"


function SignInButton(props) {
  return (
    <Button {...props} sx={SignInButtonStyle}>{staticHeader.buttons.signIn}</Button>
  )
}

export default SignInButton