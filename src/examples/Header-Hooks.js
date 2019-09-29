import React from 'react'
import { useStaticQuery,  graphql } from 'gatsby'
const getData = graphql`
    query {
        site {
        siteMetadata{
            siteTitle:title
            description
            author
            data {
            name
            age
            }
        }
        }
    }
  `

const Header = () => {
    const { 
        site:{siteMetadata:info} 
    } = useStaticQuery(getData)
    return (
        <div>
              <h1>Site: {info.siteTitle}</h1>
            <h1>Author {info.data.name}</h1>
            <h1>Age {info.data.age}</h1>
        </div>
    )
}

export default Header
