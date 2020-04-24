import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import beamsBg from '../images/eurolam-vigas_caracteristicas.jpg'
import specsBg from '../images/eurolam-vigas_bg.jpg'

const Beams = () => {
	return (
		<section className='beams mb-4'>
			<div className='beams__hero bg-color-dark-grey mb-4'>
				<img src={beamsBg} alt='' />
			</div>

			<div className='beams__image' style={{ backgroundImage: `url(${specsBg})` }}></div>

			<div className='beams__text'>
				<div className='inner-text'>
					<h3 className='beams-title text-color-primary'>
						<ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={200}>
							Ventajas de la <strong>Madera Laminada</strong>
						</ScrollAnimation>
					</h3>
					<p className='start'>
						Excepcional resistencia al fuego. Bajo la acción del fuego se produce una
						carbonización en la superficie de la madera que actúa como aislante, impidiendo la
						propagación de la llama hacia su interior.
					</p>
					<ul className='m-none'>
						<li>Belleza en todas sus formas.</li>
						<li>Propiedades aislantes.</li>
						<li>Facilidad de montaje.</li>
						<li>Mantenimiento y duración.</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Beams
