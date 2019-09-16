import React from 'react'

const Services = () => {
	const toggleCard = e => {
		const parent = e.currentTarget.parentElement

		const card = parent.querySelector('.service-card__text')

		card.classList.toggle('active')
	}

	return (
		<section className="services bg-color-white py-5 px-2" id="servicios">
			<h2 className="services__title">Servicios</h2>

			<ul className="services__list p-none m-none">
				<li className="service-card">
					<div className="grey bg-color-light-grey p-1" onClick={e => toggleCard(e)}>
						<h3 className="service-card__name m-none p-q-1">Arquitectura</h3>
						<h4 className="service-card__tagname text-color-primary m-none p-q-1">Diseño</h4>
					</div>
					<div className="service-card__text text-color-primary" onClick={e => toggleCard(e)}>
						<p className="inner-card">
							<div className="close-card">&times;</div>
							<em>
								Contamos con un equipo de profesionales capaz de brindar un gran
								asesoramiento técnico, estético y constructivo para llevar a adelante de la
								mejor manera la realización de los proyectos.
							</em>
						</p>
					</div>
				</li>
				<li className="service-card">
					<div className="grey bg-color-light-grey p-1" onClick={e => toggleCard(e)}>
						<h3 className="service-card__name m-none p-q-1">Fabricación</h3>
						<h4 className="service-card__tagname text-color-primary m-none p-q-1">
							Tecnología
						</h4>
					</div>
					<div className="service-card__text text-color-primary" onClick={e => toggleCard(e)}>
						<p className="inner-card">
							<div className="close-card">&times;</div>
							<em>
								A lo largo de varias décadas hemos adquirido y perfeccionado la fabricación
								de este material de precisión tan variado. Así logramos un producto versátil
								para construcciones modernas, exigentes y económicas. El elemento central de
								la producción de madera laminada encolada son dos presas de alta frecuencia,
								permite la flexibilidad en la creación de secciones transversales y
								longitudes. Así, además de paquetes de productos estándar, se pueden
								procesar pedidos de proyectos y recopilar comisiones si el cliente lo desea.
							</em>
						</p>
					</div>
				</li>
				<li className="service-card">
					<div className="grey bg-color-light-grey p-1" onClick={e => toggleCard(e)}>
						<h3 className="service-card__name m-none p-q-1">Control de calidad</h3>
						<h4 className="service-card__tagname text-color-primary m-none p-q-1">
							Embalaje
						</h4>
					</div>
					<div className="service-card__text text-color-primary" onClick={e => toggleCard(e)}>
						<p className="inner-card">
							<div className="close-card">&times;</div>
							<em>
								El cumplimiento de nuestros altos estándares de calidad se garantiza gracias
								a nuestra gestión interna. La incorporación de nuevas tecnología también
								permite que se clasifiquen mecánicamente según su resistencia y aspecto
								logrando una minuciosa supervisación casi al detalle.
							</em>
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default Services
