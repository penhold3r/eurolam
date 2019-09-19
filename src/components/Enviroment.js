import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import wave from '../images/eurolam_logo-wave.svg'
import forestBg from '../images/eurolam-forest_bg.jpg'
import beamsBg from '../images/eurolam-vigas_caracteristicas.jpg'

const Enviroment = () => {
	return (
		<section className="enviroment">
			<header className="enviroment__header">
				<h2 className="env-title text-color-grey py-3 m-none">
					<ScrollAnimation
						animateIn="fadeIn"
						animateOnce={true}
						delay={200}
						style={{
							height: '100%',
							width: '100%'
						}}
					>
						<img src={wave} alt="Eurolam" />
					</ScrollAnimation>
				</h2>
				<div className="env-hero bg-color-dark-grey">
					<img src={beamsBg} alt="" />
				</div>
			</header>
			<div className="enviroment__content">
				<div
					className="env-img bg-color-dark-grey"
					style={{ backgroundImage: `url(${forestBg})` }}
				></div>
				<div className="env-text">
					<div className="inner-text">
						<h3 className="env-title text-color-primary m-none">
							<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
								<span>
									El cuidado del <strong>Medio Ambiente</strong>
								</span>
							</ScrollAnimation>
						</h3>

						<p className="start">
							<em>
								La madera laminada es producida con un recurso renovable como la madera, a
								diferencia de otros materiales como el acero o el hormigón.
							</em>
						</p>

						<p>
							Valerio Oliva obtiene su materia prima de bosques gestionados de manera
							sostenible. De este modo hacemos un aporte al medio ambiente para lograr un
							futuro sostenible.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Enviroment
