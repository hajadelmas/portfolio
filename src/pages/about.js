import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Des sites modernes, propulsés en Javascript et faits pour durer.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            {/* <figcaption>Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">A propos de Loic Haja Delmas.</h3>
          <p>
          C’est d’abord dans la communication et la création d’une première agence à 22 ans que j’ai établis mon premier contact avec la création de site internet.
          </p>
          <p>
          Peu d’années plus tard, c’est en tant que développeur/ concepteur que je souhaites partager cette passion.
          </p>
          <h4 id="dynamic-styles">Stack technique</h4>
          <p>Pour des sites vitrines ou de petites envergures, mon souhait était d’innover à partir de l’ancien. L’utilisation de Gatsby JS permet une plus grande liberté côté Front (client). Pour le côté administration et gestion des contenus par l’utilisateur, il s’utilise aussi bien avec Wordpress comme CMS ou avec des Headless CMS comme Strapi.</p>
          <p>Aussi, pour des sites plus complexes, j’utiliserais React JS avec REDUX, React HOOKS, du serverless avec Firebase (de Google) ou encore la création d’API REST avec Node et Express JS.</p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "alejandro-escamilla-xII7efH1G6o-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
