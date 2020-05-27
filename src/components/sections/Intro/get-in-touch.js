import React from "react"
import styled from "styled-components"
import Button from "../../Button"
import ContactGraphic from "../../graphics/contact.svg"

const StyledGraphic = styled(ContactGraphic)`
  max-width: 20vw;
  border: 1px solid white;
`

const GetInTouch = () => {
  return <Button label="Get in Touch" Graphic={StyledGraphic} />
}

export default GetInTouch
