import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import Grid from "@material-ui/core/Grid"
import { Container } from "@material-ui/core"
import styled from "styled-components"

import Theme from "../theme"
import Nav from "../Nav"

const Wrapper = styled(Container)`
  background-color: ${props => props.theme.colors.darkGrey};
  min-height: 100vh;
  padding: 0;
`

const HomeLayout = ({ children }) => {
  return (
    <Theme>
      <Wrapper maxWidth="false">
        <Grid container spacing="5">
          <Grid item xs={12}>
            <Nav />
          </Grid>

          <Grid item xs={12}>
            <Container>{children}</Container>
          </Grid>
        </Grid>
      </Wrapper>
    </Theme>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
