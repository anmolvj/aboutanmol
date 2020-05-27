import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

import Msg from "./msg"
import DevImage from "./dev"
import Resume from "./resume"
import GetInTouch from "./get-in-touch"

const ContainerGrid = styled(Grid)``
const Intro = props => (
  <ContainerGrid
    container
    direction="column"
    justify="center"
    alignItems="stretch"
    {...props}
  >
    <Grid item>
      <Grid container direction="row" justify="space-around">
        <Grid item>
          <Msg />
        </Grid>
        <Grid item>
          <DevImage />
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Resume />
        </Grid>
        <Grid item>
          <GetInTouch />
        </Grid>
      </Grid>
    </Grid>
  </ContainerGrid>
)

export default Intro
