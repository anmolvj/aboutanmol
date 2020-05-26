import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    darkGrey: "#222831",
    darkerGrey: "#15191e",
    lightGrey: "#2a323c",
    black: "#0a0d0f",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
