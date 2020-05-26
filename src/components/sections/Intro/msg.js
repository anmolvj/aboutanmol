import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"

const HiMsg = styled(Typography)`
  color: ${props => props.theme.colors.powderWhite};
`
const Msg = styled(Typography)`
  color: ${props => props.theme.colors.offWhite};
  font-weight: bold;
`
const Container = styled.div`
  max-width: 30vw;
`

const Message = () => {
  const data = useStaticQuery(graphql`
    query SiteIntroQuery {
      site {
        siteMetadata {
          introMsg
          firstName
          location
        }
      }
    }
  `)

  return (
    <Container>
      <HiMsg variant="h2">I'm {data.site.siteMetadata.firstName},</HiMsg>
      <Msg variant="h5">{data.site.siteMetadata.introMsg}</Msg>
      <Msg variant="caption">{data.site.siteMetadata.location}</Msg>
    </Container>
  )
}

export default Message
