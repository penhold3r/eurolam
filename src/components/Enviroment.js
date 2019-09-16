import React from 'react'

import forestBg from '../images/eurolam-forest_bg.jpg'
import beamsBg from '../images/eurolam-vigas_caracteristicas.jpg'

const Enviroment = () => {
	return (
		<section className="enviroment">
			<header className="enviroment__header">
				<h2 className="env-title p-3 m-none">
					<span>
						Eurolam y el cuidado del <strong>Medio Ambiente</strong>
					</span>
				</h2>
				<div className="env-hero bg-color-dark-grey">
					<img src={beamsBg} />
				</div>
			</header>
			<div className="enviroment__content">
				<div className="env-img bg-color-dark-grey">
					<img src={forestBg} alt="" />
				</div>
				<div className="env-text">
					<h3 className="m-none">Vigas Laminadas</h3>
					<ul className="m-none">
						<li>
							Excepcional resistencia al fuego. Bajo la acción del fuego se produce una
							carbonización en la superficie de la madera que actúa como aislante, impidiendo
							la propagación de la llama hacia su interior.
						</li>
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

export default Enviroment
