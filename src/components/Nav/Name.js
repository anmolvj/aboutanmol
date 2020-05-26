import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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

  return <Link to="/">{data.site.siteMetadata.title}</Link>
}

Name.propTypes = {
  siteTitle: PropTypes.string,
}

Name.defaultProps = {
  siteTitle: ``,
}

export default Name
