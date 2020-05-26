import React from "react"
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

// theme.typography.h4 = {
//   fontSize: "1.2rem",
//   "@media (min-width:600px)": {
//     fontSize: "1.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "2rem",
//   },
// }

const MuiTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default MuiTheme
