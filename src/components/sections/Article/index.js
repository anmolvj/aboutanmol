import React from "react"
import styled from "styled-components"
import SectionLayout from "../../layouts/section"
import { sectionIds } from "../../config"

const Article = props => (
  <SectionLayout title={sectionIds.ARTICLE} id={sectionIds.ARTICLE}>
    just a child
  </SectionLayout>
)

export default Article
