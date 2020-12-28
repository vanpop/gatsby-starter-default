import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Who is Evan Stein?" />
    <h1>Greetings Humans!</h1>
    <p>If you're reading this, you are probably wondering who Evan Stein is.</p>
    <p>Or maybe you are wondering who I am.</p>
    <p>Well, so am I.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
