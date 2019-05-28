import React from 'react';
import {StaticQuery,graphql} from 'gatsby';
import Img from 'gatsby-image';
const returnImg = (file)=>{
    return file ? <Img fluid={file.node.childImageSharp.fluid}/>: <img src = "https://via.placeholder.com/200x200"/>;
}

const projectImg = props => {
    return (
        <StaticQuery
            query={graphql`
            query {
                images:allFile(filter:{sourceInstanceName:{eq:"projectImages"} extension: { regex: "/jpeg|jpg|png|gif/"}}) {
                    edges{
                        node{
                            name
                            extension
                            childImageSharp {
                                fluid(maxWidth: 200 maxHeight:200) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                        }
                    }
                }
            }
    
             `}
            render={
            ({images}) => 
                returnImg(images.edges.find(image=>image.node.name === props.imgSrc))
            }
        />
    );
}

export default projectImg;