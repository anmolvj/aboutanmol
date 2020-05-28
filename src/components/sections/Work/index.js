import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import SectionTitle from "../common/title"
import WorkImg from "../../graphics/work.svg"

const StyledWorkImg = styled(WorkImg)`
  height: 10rem;
`

const ContainerGrid = styled(Grid)``

const Work = props => (
  <ContainerGrid
    container
    direction="column"
    justify="center"
    alignItems="stretch"
    {...props}
  >
    <SectionTitle title="Work" />
    <StyledWorkImg />
  </ContainerGrid>
)

export default Work
