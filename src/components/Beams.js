import React from 'react'

import vigasBG from '../images/eurolam-vigas_bg.jpg'
import vigasFeat from '../images/eurolam-vigas_caracteristicas.jpg'

const Beams = () => {
	return (
		<section className="beams">
			<div className="beams__hero bg-dark-grey">
				<img className="beams-bg" src={vigasBG} alt="" />
				<div className="beams-content">
					<div className="beams-content__image bg-grey">
						<img src={vigasFeat} alt="" />
					</div>
					<div className="beams-content__text p-2">
						<h3 className="text-color-white">Ventajas de la madera laminada</h3>
						<p className="text-color-white">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime doloremque
							praesentium obcaecati cumque harum minus, modi ad! Optio, voluptas dolorem, ab
							totam rem corporis pariatur fugiat iure necessitatibus nobis et.
						</p>
					</div>
				</div>
			</div>
			<div className="beams__specs px-2 py-3 mt-3">
				<ul className="beams-grid p-none">
					<li className="beams-card m-none p-h-1">
						<div className="beams-card__icon bg-color-light-grey" />
						<h3 className="beams-card__title light text-color-primary">Tipos de Corte</h3>
					</li>
					<li className="beams-card m-none p-h-1">
						<div className="beams-card__icon bg-color-light-grey" />
						<h3 className="beams-card__title light text-color-primary">Dimensiones</h3>
					</li>
					<li className="beams-card m-none p-h-1">
						<div className="beams-card__icon bg-color-light-grey" />
						<h3 className="beams-card__title light text-color-primary">Enlaces</h3>
					</li>
					<li className="beams-card m-none p-h-1">
						<div className="beams-card__icon bg-color-light-grey" />
						<h3 className="beams-card__title light text-color-primary">Herrajes</h3>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Beams
