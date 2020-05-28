import React from "react"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  margin: 3rem;
  color: ${props => props.theme.colors.powderWhite};
`

const SectionTitle = ({ title }) => (
  <StyledTitle>
    <Typography variant="h3">{title}</Typography>
  </StyledTitle>
)

export default SectionTitle
