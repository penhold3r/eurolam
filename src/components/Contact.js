import React, { useRef } from 'react'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import contactBg from '../images/eurolam-contact_bg.jpg'

const Contact = () => {
	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const msgInput = useRef(null)

	const handleFocus = (tgt, focus = false) => {
		focus ? tgt.current.classList.add('expanded') : tgt.current.classList.remove('expanded')
	}

	return (
		<section
			className="contact bg-color-dark-grey"
			id="contacto"
			style={{ backgroundImage: `url(${contactBg})` }}
		>
			<div className="contact__content">
				<h2 className="contact-title text-color-white">Contacto</h2>
				<form className="contact-form">
					<div className="form-block name" ref={nameInput}>
						<input
							type="text"
							className="form-input text-color-white py-h-1"
							name="name"
							onFocus={() => handleFocus(nameInput, true)}
							onBlur={() => handleFocus(nameInput, false)}
							placeholder="Nombre"
						/>
					</div>
					<div className="form-block email" ref={emailInput}>
						<input
							type="email"
							className="form-input text-color-white py-h-1"
							name="email"
							onFocus={() => handleFocus(emailInput, true)}
							onBlur={() => handleFocus(emailInput, false)}
							placeholder="Email"
						/>
					</div>
					<div className="form-block messaje" ref={msgInput}>
						<textarea
							className="form-input textarea text-color-white py-h-1"
							name="message"
							onFocus={() => handleFocus(msgInput, true)}
							onBlur={() => handleFocus(msgInput, false)}
							placeholder="Mensaje"
						/>
					</div>
					<input
						className="form-submit bg-color-primary text-color-white py-h-1 px-1"
						type="submit"
						value="Enviar"
					/>
				</form>
				<ul className="contact-info p-none my-2">
					<li className="contact-info__item p-1">
						<FontAwesomeIcon className="fa text-color-primary" icon={['fas', 'home']} />
						<p className="text-color-white m-none">
							C. Rodríguez Peña 2250, M5501 Godoy Cruz, Mendoza, Argentina.
						</p>
					</li>
					<li className="contact-info__item p-1">
						<FontAwesomeIcon className="fa text-color-primary" icon={['fas', 'envelope']} />
						<Link to="mailto:info@eurolam.cl" className="text-color-white">
							info@eurolam.cl
						</Link>
					</li>
					<li className="contact-info__item p-1">
						<FontAwesomeIcon className="fa text-color-primary" icon={['fas', 'phone-alt']} />
						<Link to="mailto:+5492615086518" className="text-color-white">
							54 9 261 508 6518
						</Link>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Contact
