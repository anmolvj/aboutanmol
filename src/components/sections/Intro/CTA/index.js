import React from "react"
import styled from "styled-components"
import Button from "../../../Button"

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
