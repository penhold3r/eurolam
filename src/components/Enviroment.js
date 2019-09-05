import React from 'react'

import forestBg from '../images/eurolam-forest_bg.jpg'

const Enviroment = () => {
	return (
		<section className="enviroment" style={{ backgroundImage: `url(${forestBg})` }}>
			<h2 className="enviroment__title text-color-white p-3 m-none">
				<span>
					Eurolam y el cuidado del <strong>Medio Ambiente</strong>
				</span>
			</h2>
			<div className="enviroment__text p-3">
				<h3 className="m-none">Vigas Laminadas</h3>
				<ul className="m-none">
					<li>
						Excepcional resistencia al fuego. Bajo la acción del fuego se produce una
						carbonización en la superficie de la madera que actúa como aislante, impidiendo la
						propagación de la llama hacia su interior.
					</li>
					<li>Belleza en todas sus formas.</li>
					<li>Propiedades aislantes.</li>
					<li>Facilidad de montaje.</li>
					<li>Mantenimiento y duración.</li>
				</ul>
			</div>
		</section>
	)
}

export default Enviroment
