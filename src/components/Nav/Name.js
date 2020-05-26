import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.powderWhite};
  text-decoration: none;
`

const Name = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLink to="/">
      <Typography variant="h6">{data.site.siteMetadata.title}</Typography>
    </StyledLink>
  )
}

Name.propTypes = {
  siteTitle: PropTypes.string,
}

Name.defaultProps = {
  siteTitle: ``,
}

export default Name
