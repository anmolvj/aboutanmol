import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import SectionTitle from "../common/title"
import SkillsImg from "../../graphics/code.svg"

const StyledSkillsImg = styled(SkillsImg)`
  height: 10vw;
`

const ContainerGrid = styled(Grid)``

const Skills = props => (
  <ContainerGrid
    container
    direction="column"
    justify="center"
    alignItems="stretch"
    {...props}
  >
    <SectionTitle title="Skills" />
    <StyledSkillsImg />
  </ContainerGrid>
)

export default Skills
