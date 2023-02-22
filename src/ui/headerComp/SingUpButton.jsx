import { Button } from "@mui/material"
import { staticHeader } from "../static/static"
import { SignUpButtonStyle } from "./muiHeadeStyle"

function SignUpButton(props) {
  return (
    <Button {...props} sx={SignUpButtonStyle}>{staticHeader.buttons.singUp}</Button>
  )
}

export default SignUpButton