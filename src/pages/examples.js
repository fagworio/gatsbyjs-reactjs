import React from 'react'
import HeaderHooks from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const examples = (props) => {
   const { name, age } = props.data.site.siteMetadata.person
    
    return (
        <Layout>
        <div>
            Examples page
            <HeaderHooks />
            <HeaderStatic />
            <div>
                This is our person:
                <h3>{name} {age}</h3>
            </div>
        </div>
        </Layout>
    )
}
export const getData = graphql`
query {
    site {
    siteMetadata{
        siteTitle:title
        description
        author
        person:data {
            name
            age
        }
    }
    }
}
`
export default examples
