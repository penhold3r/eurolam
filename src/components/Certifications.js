import React from 'react'
import { Parallax } from 'react-parallax'

import certBg from '../images/eurolam-certifications_bg.jpg'
import certBadge from '../images/eurolam-premium_badge.svg'

const Certifications = () => {
	return (
		<section className="certifications bg-color-grey">
			<Parallax bgImage={certBg} strength={400}>
				<div className="cert-content py-4 px-1">
					<h2 className="cert-title section-title text-color-white">Certificaciones</h2>
					<div className="cert-content">
						<p className="upper text-color-white">
							Nuestro producto está realizado bajo estrictos controles de calidad y
							seguridad. Este proceso está regulado por normas altamente calificadas y
							específicas. La fábrica cuenta con un servicio de control de calidad interno,
							equipado con un laboratorio homologado.
						</p>
						<p className="upper text-color-white">
							<strong>
								Este control de calidad es supervisado por diferentes organismos oficiales
								en función de los diferentes certificados de calidad.
							</strong>
						</p>
						<p className="red upper bg-primary p-1">
							El <strong>Otto Graft</strong> instituto de alemania es el organismo que
							habilita y califica a las fábricas de maderas laminadas en europa.
						</p>
						<p className="short text-color-white">
							<em>
								Técnicos de dicho Instituto visitaron nuestras instalaciones y su informe
								fue que <strong>Valerio Oliva S.A.C.I.A.</strong> tiene la mejor
								organización como también dispone del mejor equipamiento tecnológico.
								También existen los conocimientos necesarios en lo que refiere a una
								producción cualitativa de vigas laminadas.
							</em>
						</p>
					</div>
					<div className="cert-badge">
						<img src={certBadge} alt="premium quality" />
					</div>
				</div>
			</Parallax>
		</section>
	)
}

export default Certifications
