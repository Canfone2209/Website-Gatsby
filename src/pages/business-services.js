import React from "react"
import Layout from "../layouts"
import { withPrefix, graphql } from "gatsby"
import Phone from "../layouts/Phone"
import { Helmet } from "react-helmet"
import "../components/shop"

export default function BusinessServices({ data }) {
  return (
    <div className="">
      <div className="">
        <h1>Business Services</h1>
      </div>
    </div>
  )
}

export const query = graphql`
  query BusinessServicesQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPrismicHomeP(
      filter: { lang: { eq: "en-us" }, tags: { in: "business services" } }
    ) {
      edges {
        node {
          data {
            section {
              title_desc
              sub_title {
                text
              }
              section_hero {
                url
              }
              section_desc
              section_content {
                text
              }
              main_title {
                text
              }
            }
            intro_content {
              start_price
              intro_title {
                text
              }
              intro_subtitle {
                text
              }
              intro_desc_lists {
                text
              }
              img_intro_hero {
                url
              }
            }
          }
        }
      }
    }
  }
`
