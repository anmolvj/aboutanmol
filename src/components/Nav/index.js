import React from "react"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import styled from "styled-components"

import Items from "./Items"
import Name from "./Name"
import { StyledAppBar, StyledToolbar, StyledDrawerPaper } from "./styled"

const StyledContainer = styled.div`
  display: flex;
`

const Nav = ({ children }) => {
  const [state, setState] = React.useState({
    isDrawerOpen: false,
  })

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, isDrawerOpen: open })
  }

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar variant="dense">
          <Typography variant="h6" noWrap>
            <Name />
          </Typography>
          <IconButton
            disableFocusRipple
            disableRipple
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>

      {children}

      <Drawer
        anchor="right"
        open={state["isDrawerOpen"]}
        onClose={toggleDrawer(false)}
        PaperProps={{
          component: StyledDrawerPaper,
        }}
      >
        <Items />
      </Drawer>
    </>
  )
}

export default Nav
