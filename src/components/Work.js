import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Gallery from './Gallery'

const Work = () => {
	const {
		allFile: { edges: gallery }
	} = useStaticQuery(graphql`
		query GalleryQuery {
			allFile(filter: { relativeDirectory: { eq: "obras" } }) {
				edges {
					node {
						id
						name
						publicURL
						childImageSharp {
							fluid(maxWidth: 400) {
								src
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	return (
		<section className="work bg-color-grey p-2" id="obras">
			<h2 className="work__title text-color-white">Nuestras Obras</h2>
			<Gallery data={gallery} />
		</section>
	)
}

export default Work
