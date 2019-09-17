import React from 'react'

import Layout from '../components/Layout'
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Beams from '../components/Beams'
import Enviroment from '../components/Enviroment'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

const IndexPage = () => (
	<Layout>
		<Landing />
		<About />
		<Work />
		<Services />
		<Beams />
		<Enviroment />
		<Certifications />
		<Contact />
	</Layout>
)

export default IndexPage
