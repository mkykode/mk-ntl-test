import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <Link to="/">Back Home</Link>
  </Layout>
)

export default About
