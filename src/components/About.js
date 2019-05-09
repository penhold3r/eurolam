import React from 'react'

import aboutLogo from '../images/eurolam_logo.svg'

const About = () => {
	return (
		<section className="about py-3">
			<img className="about__image" src={aboutLogo} alt="Eurolam" />
			<div className="about__content px-1">
				<p className="text-color-primary">
					<strong>Eurolam</strong> es una marca desarrollada por la empresa Valerio Oliva
					S.A.C.I.A. en Argentina para la comercialización de vigas laminadas.
				</p>
				<p>
					Hoy abrimos nuestro <strong>espacio comercial en Chile</strong> con proyección
					exportadora a todo el mundo.
				</p>
			</div>
			<div className="about__cards  bg-color-light-grey px-2 py-3 mt-3">
				<div className="cards-grid">
					<div className="about-card">
						<div className="about-card__icon" />
						<h3 className="about-card__name">Materias Primas</h3>
					</div>
					<div className="about-card">
						<div className="about-card__icon" />
						<h3 className="about-card__name">Certificacions</h3>
					</div>
					<div className="about-card">
						<div className="about-card__icon" />
						<h3 className="about-card__name">Acabados</h3>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
