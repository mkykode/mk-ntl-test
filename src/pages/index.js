import React from "react"
import { Link } from "gatsby"
// import netlifyIdentity from "netlify-identity-widget"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { useIdentityContext } from "react-netlify-identity"
console.log(process.env.GATSBY_BASE_URL)
// netlifyIdentity.init()
const IndexPage = () => {
  const identity = useIdentityContext()
  const isLoggedIn = identity && identity.isLoggedIn
  // const handleLogin = event => {
  // container: '#netlify-modal' // defaults to document.body,
  // netlifyIdentity.open()
  // netlifyIdentity.on("login", user => {
  //   console.log(user)
  //   // Set state to logged in
  // })
  // const user = netlifyIdentity.currentUser()
  // }

  return (
    <Layout>
      <SEO title="Home" />
      {isLoggedIn ? (
        <ul>
          <li>
            <Link to="about/">About Us</Link>
          </li>
          <li>
            <Link to="contact/">Contact</Link>
          </li>
        </ul>
      ) : null}
    </Layout>
  )
}
export default IndexPage
