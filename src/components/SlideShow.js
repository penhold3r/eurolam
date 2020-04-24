import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const SlideShow = ({ images, slideHeight, slideWidth = '100%', itemWidth, speed = 30 }) => {
	const styles = {
		slideShow: {
			overflow: 'hidden',
			position: 'relative',
			width: slideWidth,

			track: {
				animation: `scroll ${speed}s linear infinite`,
				display: 'flex',
				height: `${slideHeight}px`,
				whiteSpace: 'nowrap',
				width: `calc( ${itemWidth}px * ${images.length * 2})`,
			},

			image: {
				flex: '0 0 auto',
				height: '100%',
				width: `${itemWidth}px`,
			},
		},
	}

	const injectStyle = style => {
		const styleElement = document.createElement('style')
		let styleSheet = null

		document.head.appendChild(styleElement)

		styleSheet = styleElement.sheet

		styleSheet.insertRule(style, styleSheet.cssRules.length)
	}

	const items = [...images, ...images]

	const uuid = () =>
		Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, '')
			.substr(2, 10)

	injectStyle(`
      @keyframes scroll {
         0% {
            transform: translateX(0);
         }
         100% {
            transform: translateX(-50%);
         }
      }
   `)

	return (
		<div className='slide-show' style={styles.slideShow}>
			<div className='slide-show__track' style={styles.slideShow.track}>
				{images &&
					items.map(({ node: { id, name, childImageSharp } }) => (
						<div key={uuid()} className='slide-show__image' style={styles.slideShow.image}>
							<Img className='g-image' fluid={childImageSharp.fluid} alt={name} />
						</div>
					))}
			</div>
		</div>
	)
}

SlideShow.propTypes = {
	images: PropTypes.array,
}

export default SlideShow
