import React from 'react'

import services from '../data/services-list'

const Services = () => {
	return (
		<section className="services p-2">
			<h2 className="services__title">Servicios</h2>
			<p className="services__lead lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquet orci. Ut
				interdum mauris sem, non aliquet felis interdum sit amet.
			</p>
			<ul className="services__list p-none m-none">
				{services.map((serv, key) => (
					<li className="service-card" key={key}>
						<p className="service-card__name h4 m-none p-q-1">{serv.name}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Services
