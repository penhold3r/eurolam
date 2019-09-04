import React from 'react'

import services from '../data/services-list'

const Services = () => {
	return (
		<section className="services p-2" id="servicios">
			<h2 className="services__title">Servicios</h2>

			<ul className="services__list p-none m-none">
				<li className="service-card">
					<div className="grey bg-color-light-grey p-1">
						<h3 className="service-card__name m-none p-q-1">Arquitectura</h3>
						<h4 className="service-card__tagname text-color-primary m-none p-q-1">Diseño</h4>
					</div>
					<p className="service-card__text text-color-primary">
						<em>
							Contamos con un grupos de profesionales para optimizar todo tipo de proyecto.
						</em>
					</p>
				</li>
				<li className="service-card">
					<div className="grey bg-color-light-grey p-1">
						<h3 className="service-card__name m-none p-q-1">Fabricación</h3>
						<h4 className="service-card__tagname text-color-primary m-none p-q-1">
							Supervisación
						</h4>
					</div>
					<p className="service-card__text text-color-primary">
						<em>
							Seguimiento y control de calidad desde el inicio hasta el final del trabajo.
						</em>
					</p>
				</li>
				<li className="service-card">
					<div className="grey bg-color-light-grey p-1">
						<h3 className="service-card__name m-none p-q-1">Embalaje</h3>
						<h4 className="service-card__tagname text-color-primary m-none p-q-1">Envío</h4>
					</div>
					<p className="service-card__text text-color-primary">
						<em>Protección del producto con medidas de seguridad a cualquier destino.</em>
					</p>
				</li>
			</ul>
		</section>
	)
}

export default Services
