import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import forestBg from '../images/eurolam-forest_bg.jpg'

const Enviroment = () => {
	return (
		<section className='enviroment mb-5'>
			<div className='enviroment__text'>
				<div className='inner-text'>
					<h3 className='env-title text-color-primary m-none'>
						<ScrollAnimation animateIn='fadeIn' animateOnce={true} delay={200}>
							<span>
								El cuidado del <strong>Medio Ambiente</strong>
							</span>
						</ScrollAnimation>
					</h3>

					<p className='start'>
						<em>
							La madera laminada es producida con un recurso renovable como la madera, a
							diferencia de otros materiales como el acero o el hormigón.
						</em>
					</p>

					<p>
						Valerio Oliva obtiene su materia prima de bosques gestionados de manera
						sostenible. De este modo hacemos un aporte al medio ambiente para lograr un futuro
						sostenible.
					</p>
				</div>
			</div>

			<div
				className='enviroment__image bg-color-dark-grey'
				style={{ backgroundImage: `url(${forestBg})` }}
			/>
		</section>
	)
}

export default Enviroment
