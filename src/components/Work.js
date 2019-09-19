import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Gallery from './Gallery'

import wave from '../images/eurolam_logo-wave.svg'

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
		<section className="work bg-color-grey py-2 px-1" id="obras">
			<h2
				className="work__title section-title text-color-white m-none py-2"
				style={{ backgroundImage: `url(${wave})` }}
			>
				Nuestras Obras
			</h2>
			<Gallery data={gallery} />
		</section>
	)
}

export default Work
