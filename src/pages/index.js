import React from "react"

import { HomeLayout } from "../components/layouts"
import SEO from "../components/seo"
import { Intro } from "../components/sections"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Intro id="Home" />
  </HomeLayout>
)

export default IndexPage
