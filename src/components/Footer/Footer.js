import React from 'react';
import SocialLink from '../common/SocialLink/SocialLink';
import './Footer.css';
const footer = props =>{
    
    return (
        <footer className = "Footer">
            <div className = "FooterItems">
                <h2>Here's where you can find me: </h2>
                <div>
                    <SocialLink 
                        color= {"#58828C"} link={"mailto:bryan.herrera72@gmail.com"}>
                            EMAIL
                    </SocialLink>
                    <SocialLink 
                        color = {"#0077B5"} link = {"https://linkedin.com/in/bryanherrera72/"}>
                            LINKEDIN
                    </SocialLink>
                    <SocialLink 
                        color = {"#23282d"} link = {"https://www.github.com/bryanherrera72"}>
                            GITHUB
                    </SocialLink>
                </div>
                <br/>
                <div>
                    <SocialLink 
                        color = {"#50b4f1"} link = {"https://www.twitter.com/"}>
                            TWITTER
                    </SocialLink>
                    <SocialLink 
                        color = {"#C13584"} link = {"https://twitter.com/PupusaParadise"}>
                            INSTAGRAM
                    </SocialLink>
                    <SocialLink 
                        color = {"#4469b0"} link = {"https://www.facebook.com/bryan.herrera.792"}>
                            FACEBOOK
                    </SocialLink> 
                </div>
                {/* <Link to="/about/">Go to about</Link> */}
                {/* <p> Bryan Herrera, {new Date().getFullYear()}</p> */}
            </div>
        </footer>
    );
}

export default footer;