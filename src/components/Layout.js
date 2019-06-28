import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './Header'
import Footer from './Footer'

import 'sanitize.css'
import '../styles/index.scss'

import favicon from '../images/favicon.ico'

library.add(fab)

const Layout = ({ title, children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={({ site }) => {
			const pageTitle = title ? `${title} - ${site.siteMetadata.title}` : site.siteMetadata.title
			return (
				<>
					<Helmet
						htmlAttributes={{ lang: 'es' }}
						title={pageTitle}
						meta={[
							{
								property: 'og:image',
								content: 'bookmark'
							},
							{
								name: 'description',
								content: site.siteMetadata.description
							},
							{
								name: 'keywords',
								content: 'oliva'
							}
						]}
						link={[
							{
								href: favicon,
								rel: 'shortcut icon',
								type: 'image/x-icon'
							}
						]}
						script={[
							{
								src: 'https://kit.fontawesome.com/54610dc2a8.jsx'
							}
						]}
					/>
					<Header />
					<main>{children}</main>
					<Footer />
				</>
			)
		}}
	/>
)

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default Layout
