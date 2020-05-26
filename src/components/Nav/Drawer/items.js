import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

const DrawerContentGrid = styled(Grid)`
  background-color: ${props => props.theme.colors.black};
  height: 100%;
  color: ${props => props.theme.colors.powderWhite};
  min-width: 20vw;
`
const drawerItems = [
  "Home",
  "Skills",
  "Work",
  "Testimonials",
  "Articles",
  "Contact",
]
const DrawerItems = () => (
  <DrawerContentGrid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
  >
    {drawerItems.map(i => (
      <Grid item>{i}</Grid>
    ))}
  </DrawerContentGrid>
)

export default DrawerItems
