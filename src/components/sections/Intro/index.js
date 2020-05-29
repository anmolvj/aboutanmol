import React from "react"
import styled from "styled-components"
import SectionLayout from "../../layouts/section"
import { sectionIds } from "../../config"

const Intro = props => (
  <SectionLayout title={sectionIds.INTRO} id={sectionIds.INTRO}>
    Hi, I'm Anmol! I like developing complex UI components for web and mobile
    platforms.
  </SectionLayout>
)

export default Intro
