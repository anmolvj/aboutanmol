import React from "react"
import { Typography, Link } from "@material-ui/core"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.powderWhite};
  text-decoration: none;
`

const StyledTypography = styled(Typography)`
  padding: 0.25rem 0.75rem;
`

const Items = () => (
  <>
    {["contact", "resume", "about", "work", "articles"].map(item => (
      <StyledLink href={`#${item}`}>
        <StyledTypography variant="overline">{item}</StyledTypography>
      </StyledLink>
    ))}
  </>
)

export default Items
