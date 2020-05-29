import React from "react"
import styled from "styled-components"

import Msg from "./msg"
import DevImage from "./dev"
import CTA from "./CTA"

const IntroSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MessageAndImageContainer = styled.div`
  display: flex;
`
const MessageContainer = styled.div`
  border: 1px solid white;
`
const DevImageContainer = styled.div`
  border: 1px solid white;
`
const CtaContainer = styled.div`
  border: 1px solid white;
`

const Intro = props => (
  <IntroSectionContainer>
    <MessageAndImageContainer>
      <MessageContainer>
        <Msg />
      </MessageContainer>
      <DevImageContainer>
        <DevImage />
      </DevImageContainer>
    </MessageAndImageContainer>

    <CtaContainer>
      <CTA />
    </CtaContainer>
  </IntroSectionContainer>
)

export default Intro
