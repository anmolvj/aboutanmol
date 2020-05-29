import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@material-ui/core/Paper"
import styled from "styled-components"

export const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.colors.darkGrey};
  max-height: 3rem;
`

export const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`

export const StyledDrawerPaper = styled(Paper)`
  background-color: ${props => props.theme.colors.darkerGrey};
  color: ${props => props.theme.colors.powderWhite};
  text-align: center;
  padding-top: 3rem;
`
