import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import "../styles/about.css";
import Layout from '../components/Layout/layout';
import SocialLink from '../components/common/SocialLink/SocialLink';
const about = props => {
    return (
        <StaticQuery
            query={graphql`
            query SiteAboutQuery {
                site {
                    siteMetadata {
                        about
                    }
                }
            }
            `}
            render = { data => (
                <Layout>
                    <div className = "AboutGrid">
                       <div className = "AboutContent">
                            <h1 style = {{textAlign: 'center'}}>Hi, I'm Bryan!</h1>
                            <div className = "AvatarImg">
                            </div>
                            <div className = "AboutRant">
                                {data.site.siteMetadata.about}
                            </div>
                            <br/>
                            <div className = "AboutResume">
                                <SocialLink link = "#">Download My Resume!</SocialLink>
                            </div>
                            <br/>
                        </div>

                    </div>
                </Layout>)
            }
        />
    );
}

export default about;