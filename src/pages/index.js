import React from 'react'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'

const IndexPage = () => (
	<Layout>
		<Landing />
		<About />
		<Work />
		<Services />
	</Layout>
)

export default IndexPage
