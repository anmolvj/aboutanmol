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
    <Intro id="home" />
    {/* <Skills id="skills" />
    <Work id="work" />
    <Testimonial id="testimonial" />
    <Article id="articles" />
    <Contact id="contact" /> */}
  </HomeLayout>
)

export default IndexPage
