import React from "react"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import styled from "styled-components"

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
    <StyledContainer>
      <StyledAppBar position="fixed">
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

      {/* {children} */}

      <Drawer
        anchor="right"
        open={state["isDrawerOpen"]}
        onClose={toggleDrawer(false)}
        PaperProps={{
          component: StyledDrawerPaper,
        }}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </StyledContainer>
  )
}

export default Nav
