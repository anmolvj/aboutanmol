import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import SectionTitle from "../common/title"
import ContactImg from "../../graphics/contact.svg"

const StyledContactImg = styled(ContactImg)`
  height: 10rem;
`

const ContainerGrid = styled(Grid)``

const Contact = props => (
  <ContainerGrid container direction="column" justify="center" {...props}>
    <SectionTitle title="Contact" />
    <StyledContactImg />
  </ContainerGrid>
)

export default Contact
