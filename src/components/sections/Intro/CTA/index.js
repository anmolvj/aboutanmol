import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Button from "../../../Button"
import ResumeImg from "../../../graphics/resume.svg"
import ContactImg from "../../../graphics/contact.svg"

const Container = styled.div`
  display: flex;
`

const CTA = () => (
  <Container>
    <Button label="View Resume" />
    <Button label="Get in Touch" />
  </Container>
)

export default CTA
