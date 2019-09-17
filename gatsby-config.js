const globImporter = require('node-sass-glob-importer')

module.exports = {
	siteMetadata: {
		title: `Eurolam`,
		description: `Maderas Laminadas para la construcción`,
		author: `@eurolam`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 8,
				importer: globImporter()
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Eurolam`,
				short_name: `Eurolam`,
				start_url: `/`,
				background_color: `#7f7771`,
				theme_color: `#e81c1f`,
				display: `standalone`,
				icon: `src/images/app-icon.png`,
				purpose: 'maskable any'
			}
		},
		`gatsby-plugin-offline`
	]
}
