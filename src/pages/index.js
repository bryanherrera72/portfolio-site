import React from "react"


import Layout from '../components/Layout/layout';
import SEO from "../components/seo"
import ParticleCanvas from "../components/ParticleCanvas/ParticleCanvas";
import IntroSection from '../components/IntroSection/IntroSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <ParticleCanvas/> */}
   {<IntroSection/>}
  </Layout>
)

export default IndexPage
