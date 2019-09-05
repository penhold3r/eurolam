import React from 'react'

import specsBg from '../images/eurolam-vigas_bg.jpg'
import beamsBg from '../images/eurolam-vigas_caracteristicas.jpg'

const Beams = () => {
	return (
		<section className="beams">
			<h2
				className="beams__title text-color-white p-3 m-none"
				style={{ backgroundImage: `url(${specsBg})` }}
			>
				<span>
					Ventajas de la <strong>Madera Laminada</strong>
				</span>
			</h2>
			<div className="beams__text p-3" style={{ backgroundImage: `url(${beamsBg})` }}>
				<h3 className="text-color-primary m-none">Vigas Laminadas</h3>
				<ul className="m-none text-color-white">
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

export default Beams
