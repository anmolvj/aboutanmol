import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import SectionTitle from "../common/title"
import ArticleImg from "../../graphics/article.svg"

const StyledArticleImg = styled(ArticleImg)`
  height: 10rem;
`

const ContainerGrid = styled(Grid)``

const Article = props => (
  <ContainerGrid
    container
    direction="column"
    justify="center"
    alignItems="stretch"
    {...props}
  >
    <SectionTitle title="Artiles" />
    <StyledArticleImg />
  </ContainerGrid>
)

export default Article
