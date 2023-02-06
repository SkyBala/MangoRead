import { Button } from "@mui/material"
import { staticHeader } from "../static/static"
import { SignUpButtonStyle } from "./muiHeadeStyle"

function SignUpButton() {
  return (
    <Button  sx={SignUpButtonStyle}>{staticHeader.buttons.singUp}</Button>
  )
}

export default SignUpButton