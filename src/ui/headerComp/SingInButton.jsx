import { Button } from "@mui/material"
import { SignInButtonStyle } from "./muiHeadeStyle"
import { staticHeader } from "../static/static"


function SignInButton() {
  return (
    <Button sx={SignInButtonStyle}>{staticHeader.buttons.signIn}</Button>
  )
}

export default SignInButton