import React from "react"

import { HomeLayout } from "../components/layouts"
import SEO from "../components/seo"
import {
  Intro,
  Skills,
  Work,
  Testimonial,
  Article,
  Contact,
} from "../components/sections"

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <Intro id="Home" />
    <Skills id="Skills" />
    <Work id="Work" />
    <Testimonial id="Testimonial" />
    <Article id="Article" />
    <Contact id="Contact" />
  </HomeLayout>
)

export default IndexPage
