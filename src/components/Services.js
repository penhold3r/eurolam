import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

//import wave from '../images/eurolam_logo-wave.svg'

const Services = () => {
	return (
		<section className='services bg-color-white py-5 px-2' id='servicios'>
			<h2 className='services__title section-title'>Servicios</h2>

			<ul className='services__list p-none m-none'>
				<li className='service-card'>
					<ScrollAnimation animateIn='fadeInUp' animateOnce={true} delay={0}>
						<div>
							<h3 className='service-card__name m-none p-q-1'>Arquitectura</h3>
							<h4 className='service-card__tagname text-color-primary m-none p-q-1'>
								Diseño
							</h4>
						</div>
						<div className='service-card__content'>
							<p className='text-color-grey'>
								<em>
									Contamos con un equipo de profesionales capaz de brindar un gran
									asesoramiento técnico, estético y constructivo para llevar a adelante de
									la mejor manera la realización de los proyectos.
								</em>
							</p>
						</div>
						<div className='service-card__image bg-color-grey'>
							<img src='' alt=' ' />
						</div>
					</ScrollAnimation>
				</li>

				<li className='service-card'>
					<ScrollAnimation animateIn='fadeInUp' animateOnce={true} delay={200}>
						<div>
							<h3 className='service-card__name m-none p-q-1'>Fabricación</h3>
							<h4 className='service-card__tagname text-color-primary m-none p-q-1'>
								Tecnología
							</h4>
						</div>
						<div className='service-card__content'>
							<p className='text-color-grey'>
								<em>
									A lo largo de varias décadas hemos adquirido y perfeccionado la
									fabricación de este material de precisión tan variado. Así logramos un
									producto versátil para construcciones modernas, exigentes y económicas.
									El elemento central de la producción de madera laminada encolada son dos
									presas de alta frecuencia, permite la flexibilidad en la creación de
									secciones transversales y longitudes. Así, además de paquetes de
									productos estándar, se pueden procesar pedidos de proyectos y recopilar
									comisiones si el cliente lo desea.
								</em>
							</p>
						</div>
						<div className='service-card__image bg-color-grey'>
							<img src='' alt=' ' />
						</div>
					</ScrollAnimation>
				</li>

				<li className='service-card'>
					<ScrollAnimation animateIn='fadeInUp' animateOnce={true} delay={400}>
						<div>
							<h3 className='service-card__name m-none p-q-1'>Control de calidad</h3>
							<h4 className='service-card__tagname text-color-primary m-none p-q-1'>
								Embalaje
							</h4>
						</div>
						<div className='service-card__content'>
							<p className='text-color-grey'>
								<em>
									El cumplimiento de nuestros altos estándares de calidad se garantiza
									gracias a nuestra gestión interna. La incorporación de nuevas tecnología
									también permite que se clasifiquen mecánicamente según su resistencia y
									aspecto logrando una minuciosa supervisación casi al detalle.
								</em>
							</p>
						</div>
						<div className='service-card__image bg-color-grey'>
							<img src='' alt=' ' />
						</div>
					</ScrollAnimation>
				</li>
			</ul>
		</section>
	)
}

export default Services
