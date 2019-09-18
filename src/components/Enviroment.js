import React from 'react'

import forestBg from '../images/eurolam-forest_bg.jpg'
import beamsBg from '../images/eurolam-vigas_caracteristicas.jpg'

const Enviroment = () => {
	return (
		<section className="enviroment">
			<header className="enviroment__header">
				<h2 className="env-title text-color-grey p-3 m-none">
					<span>
						Eurolam y el cuidado <br />
						del <strong>Medio Ambiente</strong>
					</span>
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
						<p>
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
