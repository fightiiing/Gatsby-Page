import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, projectStyle} from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//the file copied in


export default function Projects({data}) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
            <div className={portfolio}>
<h2>Portfolio</h2>
<h3>Websites I've created</h3>
<div className={projectStyle}>
    {projects.map(project => (
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
            </div>
        </Link>
    ))}
</div>
<p>Like what you see? Email me at {contact}</p>
</div>
    </Layout>
  )
}

// export page query
export const query = graphql`
query ProjectPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
      frontmatter {
          title
          stack
          slug
          thumb {
          childImageSharp {
              gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
              )
          }
          }
      }
      id
      }
  }
  contact: site {
      siteMetadata {
      contact
      }
  }
}
`