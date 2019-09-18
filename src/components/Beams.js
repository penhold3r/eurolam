import React from 'react'

import specsBg from '../images/eurolam-vigas_bg.jpg'

const Beams = () => {
	return (
		<section className="beams">
			<div className="beams__image" style={{ backgroundImage: `url(${specsBg})` }}></div>
			<div className="beams__text">
				<h3 className="beams-title text-color-grey">
					Ventajas de la <strong>Madera Laminada</strong>
				</h3>
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

export default Beams
