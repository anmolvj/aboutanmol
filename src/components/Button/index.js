import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import { Button as MuiButton } from "@material-ui/core"

const StyledButton = styled(MuiButton)`
  background-color: ${props => props.theme.colors.lightGrey};
  color: white;
  &:hover {
    background-color: ${props => props.theme.colors.darkerGrey};
  }
`

const Button = ({ label, Graphic }) => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid item>{Graphic && <Graphic />}</Grid>
    <Grid item>
      <StyledButton size="large" variant="contained">
        {label}
      </StyledButton>
    </Grid>
  </Grid>
)

Button.propTypes = {
  Graphic: PropTypes.element,
  label: PropTypes.string,
}

Button.defaultProps = {
  Graphic: null,
  label: "",
}

export default Button
