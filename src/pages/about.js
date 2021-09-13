import React from "react"
import About from "../layouts/About"
import Layout from "../layouts"
import { withPrefix, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function AboutPage({ data }) {
  return (
    <div className="">
      <div className="">
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77"
          />

          <script
            type="text/javascript"
            src={withPrefix("js/common/page_init.js")}
          ></script>
          <script
            type="text/javascript"
            src={withPrefix("js/common/modal_init.js")}
          ></script>

          <script
            type="text/javascript"
            src={withPrefix(
              "https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"
            )}
          ></script>
          <script
            type="text/javascript"
            src={withPrefix("js/base.js")}
          ></script>
        </Helmet>
        <Layout title={data.site.siteMetadata.title} lang="en">
          <About about={data.allPrismicAbout.edges[0].node} />
        </Layout>
      </div>
    </div>
  )
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPrismicAbout {
      edges {
        node {
          data {
            desc {
              text
            }
            image {
              alt
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`
