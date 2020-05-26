import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Name from "./Name"

const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.colors.darkerGrey};
`
const Container = ({ children }) => (
  <StyledAppBar position="static">
    <Toolbar>{children}</Toolbar>
  </StyledAppBar>
)

const Nav = () => (
  <Container>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        <Name />
      </Grid>
      <Grid item>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          disableFocusRipple
          disableRipple
          size="medium"
        >
          <MenuIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Container>
)

export default Nav
