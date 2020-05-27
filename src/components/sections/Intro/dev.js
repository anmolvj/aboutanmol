import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Developer from "./../../graphics/dev.svg"

const DevSvg = styled(Developer)`
  height: 40vw;
  width: 40vw;
`

const DevImage = () => <DevSvg />

export default DevImage
