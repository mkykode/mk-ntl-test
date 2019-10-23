import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>Thank you for you submission!</h1>
    <ul>
      <li>
        <Link to="/">Back to home</Link>
      </li>
    </ul>
  </Layout>
)

export default Thanks
