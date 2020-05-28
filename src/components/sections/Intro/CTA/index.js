import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../../../Button"
import ResumeImg from "../../../graphics/resume.svg"
import ContactImg from "../../../graphics/contact.svg"

const imageHeight = {
  height: "10vw",
}

const StyledResumeImg = styled(ResumeImg)`
  ${imageHeight}
`
const StyledContactImg = styled(ContactImg)`
  ${imageHeight}
`
const Actions = ({ label, Image }) => (
  <Grid
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
    spacing="3"
  >
    <Grid item>
      <Image />
    </Grid>
    <Grid item>
      <Button label={label} />
    </Grid>
  </Grid>
)

const CTA = () => (
  <Grid container direction="row" justify="space-evenly" alignItems="center">
    <Grid item>
      <Actions label="View Resume" Image={StyledResumeImg} />
    </Grid>
    <Grid item>
      <Actions label="Get in Touch" Image={StyledContactImg} />
    </Grid>
  </Grid>
)

export default CTA
