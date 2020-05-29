import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import styled from "styled-components"

import { StyledComponentsTheme, MuiTheme } from "../theme"
import Nav from "../Nav"

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.darkerGrey};
  color: ${props => props.theme.colors.powderWhite};
`

const HomeLayout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <React.Fragment key="parent">
      <CssBaseline />
      <StyledComponentsTheme>
        <MuiTheme>
          <Wrapper>
            <Nav>{children}</Nav>
          </Wrapper>
        </MuiTheme>
      </StyledComponentsTheme>
    </React.Fragment>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
