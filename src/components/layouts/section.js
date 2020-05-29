import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border-bottom: 0.5px solid grey;
  width: 95%;
  margin: auto;
`

const Title = styled.h3`
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border: 0.5px solid white;
  text-transform: capitalize;
`

const Section = ({ title, id, children }) => (
  <Wrapper id={id}>
    <Title>{title}</Title>
  </Wrapper>
)

export default Section
