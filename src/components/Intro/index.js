import React from "react"
import Msg from "./msg"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

const ContainerGrid = styled(Grid)``
const Intro = () => (
  <ContainerGrid container>
    <Grid item xs="4" sm="4" md="4">
      <Msg />
    </Grid>
  </ContainerGrid>
)

export default Intro
