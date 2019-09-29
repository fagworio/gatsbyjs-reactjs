import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import img from '../images/03.jpg'
import Image from 'gatsby-image'

const getImages = graphql`
{
    fixed:file(relativePath:{eq: "01.jpg"}) {
      childImageSharp{
        fixed(width:300, height: 150, grayscale: true){
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid:file(relativePath:{eq: "02.jpg"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  

`

const Images = () => {
    const data = useStaticQuery(getImages)
    console.log(data);
    
    return (
        <Wrapper>
               <article>
                <h3>Fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article>
                <h3>Basic image</h3>
                <img src={img} className="basic" />
            </article>
         
            <article>
                <h3>fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align: center;
    text-transform: capitalize;
    width: 80vh;
    .basic {
        width: 100%;
    }
    margin: 0 auto 10rem auto;
    article {
        border: 3px solid red;
        padding: 1rem 0;
        display: grid;
        grid-template-columns: 1rf 1rf 1rf;
        grid-column-gap: 1rem;
      
    }
    @media (min-width: 992px) {
        article {
        display: grid;
        grid-template-columns: 1rf 1rf 1rf;
        grid-column-gap: 1rem;
        }
    }
   
`

export default Images
