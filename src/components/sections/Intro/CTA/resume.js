import React from "react"
import styled from "styled-components"
import Button from "../../../Button"
import ResumeGraphic from "../../graphics/resume.svg"

const StyledGraphic = styled(ResumeGraphic)`
  width: 10vw;
`

const Resume = () => {
  return <Button label="View Resume" Graphic={StyledGraphic} />
}

export default Resume
