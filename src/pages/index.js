import React from "react"
import Layout from "../components/Layout"
import { header, btn } from '../styles/home.module.css'
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
//console.log(data)
const image = getImage(data.file.childImageSharp.gatsbyImageData)  
return (
    <Layout>
    <section className={header}>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
     <p>Hello world! This is the homepage</p>
     <Link className={btn} to="/projects">My Portfolio project</Link>
     </div>
     <GatsbyImage image={image} alt="banner"/>
  </section>
  </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(       
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP])
      }
    }
  }
`