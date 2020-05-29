import React from "react"
import styled from "styled-components"

import Msg from "./msg"
import DevImage from "./dev"
import CTA from "./CTA"
import Developer from "./../../graphics/dev.svg"

const IntroSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`
const MessageAndImageContainer = styled.div`
  display: flex;
`
const MessageContainer = styled.div`
  padding: 1rem;
  border: 1px solid white;
`
const DevImageContainer = styled.div``
const CtaContainer = styled.div`
  border: 1px solid white;
  margin-top: 2rem;
  padding: 1rem;
`

const Intro = props => (
  <IntroSectionContainer>
    <MessageContainer>
      <Msg />
    </MessageContainer>

    <CtaContainer>
      <CTA />
    </CtaContainer>
  </IntroSectionContainer>
)

export default Intro
