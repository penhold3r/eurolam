import React from 'react'

import gallery from '../data/gallery-images'

const Gallery = () => {
	return (
		<section className="gallery p-2">
			<h2 className="gallery__title text-color-grey">Nuestras Obras</h2>
			<p className="gallery__lead lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquet orci. Ut
				interdum mauris sem, non aliquet felis interdum sit amet.
			</p>
			<div className="gallery__list">
				{gallery.map((image, key) => (
					<div className="image-card" key={key}>
						<div className="image-card__image" />
						<h3 className="image-card__name m-none p-h-1">{image.name}</h3>
					</div>
				))}
			</div>
		</section>
	)
}

export default Gallery
