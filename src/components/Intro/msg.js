import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const HiMsg = styled(Typography)`
  color: ${props => props.theme.colors.powderWhite};
`
const Msg = styled(Typography)`
  color: ${props => props.theme.colors.offWhite};
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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      spacing="2"
    >
      <Grid item>
        <HiMsg variant="h3">I'm {data.site.siteMetadata.firstName},</HiMsg>
      </Grid>
      <Grid item>
        <Msg variant="subtitle2">{data.site.siteMetadata.introMsg}</Msg>
      </Grid>
      <Grid item>
        <Msg variant="caption">{data.site.siteMetadata.location}</Msg>
      </Grid>
    </Grid>
  )
}

export default Message
