import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Beams from '../components/Beams'

const IndexPage = () => (
	<Layout>
		<Landing />
		<About />
		<Gallery />
		<Services />
		<Beams />
	</Layout>
)

export default IndexPage
