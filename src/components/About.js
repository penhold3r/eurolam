import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

import VigasTable from './VigasTable'

import bgAbout from '../images/eurolam-about_bg.jpg'
import bgSpecs from '../images/eurolam-caracteristicas_bg.jpg'

import logoText from '../images/eurolam_logo-text.svg'
//import logoWave from '../images/eurolam_logo-wave.svg'

import caracteristicas from '../images/caracteristicas.svg'
import cortes from '../images/cortes.svg'
import estructuras from '../images/estructuras.svg'

import estructurasType from '../images/eurolam_tipos-de-estructura.svg'
import cortesType from '../images/eurolam_tipos-de-corte.svg'

const About = () => {
	const [modalState, setModalState] = useState({
		modalOpen: false,
		modalContent: '',
		modalTitle: ''
	})

	const openModal = (title, content) => {
		const open = {
			modalOpen: true,
			modalContent: content,
			modalTitle: title
		}
		setModalState(open)
	}

	const closeModal = () => {
		const defModal = {
			modalOpen: false,
			modalContent: '',
			modalTitle: ''
		}
		setModalState(defModal)
	}

	return (
		<section className="about" id="nosotros">
			<div
				className="about__content bg-color-dark-grey px-1 py-5"
				style={{ backgroundImage: `url(${bgAbout})` }}
			>
				<ScrollAnimation
					animateIn="fadeInUp"
					delay={250}
					animateOnce={true}
					style={{ margin: 'auto' }}
				>
					<div className="text-block py-3">
						<img src={logoText} alt="eurolam" className="logo-text" />
						<p className="text-color-white">
							<strong>Eurolam</strong> es una marca desarrollada por la empresa
							<br />
							<strong>Valerio Oliva S.A.C.I.A.</strong>
							<br />
							en Argentina para la comercialización de vigas laminadas.
						</p>
						<p className="text-color-primary enfasis my-2">
							Hoy abrimos nuestro <strong>espacio comercial en Chile</strong> con proyección
							exportadora a todo el mundo.
						</p>
					</div>
				</ScrollAnimation>
			</div>
			<Parallax bgImage={bgSpecs} strength={400}>
				<div className="caracteristics px-1 py-4">
					<h3 className="caracteristics__title section-title">
						Diseño, Ingeniería y Fabricación
					</h3>
					<p className="caracteristics__text">
						La madera multilaminada está constituida por láminas de distintos largos,
						seleccionados, de un espesor determinado que permite eliminar los defectos. Se
						unen entre sí por el sistema de entalladuras múltiples, hasta alcanzar la longitud
						de la pieza a construir.
					</p>
					<ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={250}>
						<p className="caracteristics__text feat text-color-primary py-1 px-2">
							<em>
								Estas láminas son encoladas, obteniéndose un elemento con resistencia
								mecánica superior a La misma madera que lo compone y de gran estabilidad
								dimensional.
							</em>
						</p>
					</ScrollAnimation>
				</div>
			</Parallax>
			<div className="cards px-2 py-3 mt-3">
				<div className={`specs-modal p-2 ${modalState.modalOpen && 'open'}`}>
					<div className="specs-content bg-color-white">
						<header className="modal-header bg-color-white p-1">
							<h3 className="text-color-primary m-none">
								{modalState.modalTitle && modalState.modalTitle}
							</h3>
							<div className="close-modal text-color-primary" onClick={() => closeModal()}>
								&times;
							</div>
						</header>
						<div className="modal-content p-1">
							{modalState.modalContent && modalState.modalContent}
						</div>
					</div>
				</div>

				<ul className="cards__grid p-none">
					<li className="beams-card m-none p-h-1">
						<ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={250}>
							<div
								className="beams-card__icon bg-color-light-grey"
								onClick={() =>
									openModal('Tipos de Estructuras', <img src={estructurasType} alt="" />)
								}
							>
								<img src={estructuras} alt="[ estructuras ]" />
							</div>
						</ScrollAnimation>
						<h3 className="beams-card__title light text-color-primary">Estructuras</h3>
					</li>
					<li className="beams-card m-none p-h-1">
						<ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={250}>
							<div
								className="beams-card__icon bg-color-light-grey"
								onClick={() => openModal('Caracteristicas', <VigasTable />)}
							>
								<img src={caracteristicas} alt="[ caracteristicas ]" />
							</div>
						</ScrollAnimation>
						<h3 className="beams-card__title light text-color-primary">Caracteristicas</h3>
					</li>
					<li className="beams-card m-none p-h-1">
						<ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={250}>
							<div
								className="beams-card__icon bg-color-light-grey"
								onClick={() =>
									openModal('Tipos de Cortes', <img src={cortesType} alt="" />)
								}
							>
								<img src={cortes} alt="[ cortes ]" />
							</div>
						</ScrollAnimation>
						<h3 className="beams-card__title light text-color-primary">Cortes</h3>
					</li>
				</ul>
				<p className="cards__footnote text-color-primary py-1">
					<span className="upper text-color-dark-grey">
						La firma elabora industrialmente maderas multilaminadas desde hace cuatro décadas.
					</span>
					<br />
					<em>
						a ese efecto cuenta con una planta de 3000m2 cubiertos, personal capacitado y el
						más moderno equipamiento, que nos permite asegurar el mantenimiento de la calidad.
					</em>
				</p>
			</div>
		</section>
	)
}

export default About
