import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
console.log(process.env.GATSBY_BASE_URL)
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <ul>
      <li>
        <Link to="about/">About Us</Link>
      </li>
      <li>
        <Link to="contact/">Contact</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
