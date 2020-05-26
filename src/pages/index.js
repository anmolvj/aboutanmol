import React from "react"

import { HomeLayout } from "../components/layouts"
import SEO from "../components/seo"
import Intro from "../components/Intro"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Intro />
  </HomeLayout>
)

export default IndexPage
