import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import Item from "./item"

const DrawerContentGrid = styled(Grid)`
  min-height: 100vh;
  color: ${props => props.theme.colors.powderWhite};
  min-width: 20vw;
  padding-top: 50px;
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
    spacing="5"
  >
    {drawerItems.map(i => (
      <Grid item>
        <Item name={i} />
      </Grid>
    ))}
  </DrawerContentGrid>
)

export default DrawerItems
