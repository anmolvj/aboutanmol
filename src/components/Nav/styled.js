import React from "react"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import styled from "styled-components"

export const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.colors.darkGrey};
`

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`

export const StyledDrawerPaper = styled(Paper)`
  background-color: ${props => props.theme.colors.darkerGrey};
  color: ${props => props.theme.colors.powderWhite};
`
