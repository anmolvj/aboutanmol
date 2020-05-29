import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"

const HiMsg = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`

const Msg = styled.div`
  color: ${props => props.theme.colors.offWhite};
  font-weight: bold;
  font-size: 0.75rem;
`
const Location = styled.div`
  color: ${props => props.theme.colors.offWhite};
  font-weight: bold;
  font-size: 0.5rem;
`

const HiMsgCom = ({ text }) => <HiMsg variant="h6">I'm {text},</HiMsg>

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
    <>
      <HiMsgCom text={data.site.siteMetadata.firstName} />
      <Msg variant="subtitle2">{data.site.siteMetadata.introMsg}</Msg>
      <Location variant="caption">{data.site.siteMetadata.location}</Location>
    </>
  )
}

export default Message
