import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import SectionTitle from "../common/title"
import TestimonialImg from "../../graphics/testimonial.svg"

const StyledTestimonialImg = styled(TestimonialImg)`
  height: 10rem;
`

const ContainerGrid = styled(Grid)``

const Testimonial = props => (
  <ContainerGrid
    container
    direction="column"
    justify="center"
    alignItems="stretch"
    {...props}
  >
    <SectionTitle title="Testimonial" />
    <StyledTestimonialImg />
  </ContainerGrid>
)

export default Testimonial
