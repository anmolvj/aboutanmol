import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"

import { StyledComponentsTheme, MuiTheme } from "../theme"
import Nav from "../Nav"

const HomeLayout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <React.Fragment key="parent">
      <CssBaseline />
      <StyledComponentsTheme>
        <MuiTheme>
          <Nav>{children}</Nav>
        </MuiTheme>
      </StyledComponentsTheme>
    </React.Fragment>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
