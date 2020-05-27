import React from "react"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import Paper from "@material-ui/core/Paper"
import styled from "styled-components"

import Items from "./items"

const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.colors.black};
`

const NavDrawer = () => {
  const [state, setState] = React.useState({
    drawer: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        disableFocusRipple
        disableRipple
        size="medium"
        onClick={toggleDrawer("drawer", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["drawer"]}
        onClose={toggleDrawer("drawer", false)}
        PaperProps={{ component: StyledPaper }}
      >
        <Items />
      </Drawer>
    </>
  )
}

export default NavDrawer
