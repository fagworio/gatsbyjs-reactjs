import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

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

const HeaderStatic = () => {
    return <StaticQuery query={getData} render={(data)=>{
        console.log(data)
        return <div><h1>Site {data.site.siteMetadata.description}</h1></div>
    }}></StaticQuery>
}

export default HeaderStatic
