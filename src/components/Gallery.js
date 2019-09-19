import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Gallery = ({ data }) => {
	const [modalState, setModalState] = useState({
		modalOpen: false,
		currentImage: ''
	})

	const imgs = data.map(({ node: { id, name, publicURL, childImageSharp } }) => {
		const thumb = childImageSharp.fluid

		return (
			<div key={id} className="gallery-item">
				<div
					className="gallery-item__image"
					onClick={() => {
						const open = {
							currentImage: publicURL,
							modalOpen: true
						}
						setModalState(open)
					}}
				>
					<Img className="g-image" fluid={thumb} alt={name} />
				</div>
				<h3 className="gallery-item__title bg-color-dark-grey text-color-white m-none p-h-1">
					{name}
				</h3>
			</div>
		)
	})

	return (
		<div className="gallery">
			<div className={modalState.modalOpen ? 'modal-image open' : 'modal-image'}>
				<div className="inner-modal">
					<div
						className="close-modal"
						onClick={() => {
							const close = {
								currentImage: '',
								modalOpen: false
							}

							setModalState(close)
						}}
					>
						&times;
					</div>
					<img src={modalState.currentImage} alt="" />
				</div>
			</div>
			{imgs}
		</div>
	)
}

Gallery.propTypes = {
	data: PropTypes.array
}

export default Gallery
