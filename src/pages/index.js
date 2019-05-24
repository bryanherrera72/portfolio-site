import React from "react"


import Layout from '../components/Layout/layout';
import SEO from "../components/seo"
// import ParticleCanvas from "../components/ParticleCanvas/ParticleCanvas";
import IntroSection from '../components/IntroSection/IntroSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web developer`,`gatsby`, `react`, `portfolio`]} />
    {/* I ditched this cause it just wasn't performant <ParticleCanvas/> */}
   <IntroSection/>
  </Layout>
)

export default IndexPage
