import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.powderWhite};
  text-decoration: none;
`

const Item = ({ name }) => <StyledLink to={`#${name}`}>{name}</StyledLink>

export default Item
