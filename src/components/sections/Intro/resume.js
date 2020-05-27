import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import Button from "../../Button"
import ResumeGraphic from "../../graphics/resume.svg"

const StyledGraphic = styled(ResumeGraphic)`
  max-width: 20vw;
  border: 1px solid white;
`

const Resume = () => {
  return <Button label="View Resume" Graphic={StyledGraphic} />
}

export default Resume
