import React, { useRef } from 'react'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import submitForm from '../utils/submit-form'

import contactBg from '../images/eurolam-contact_bg.jpg'

const Contact = () => {
	const nameInput = useRef(null)
	const emailInput = useRef(null)
	const msgInput = useRef(null)

	const contactMsgs = () => {
		const successMsg = '¡Mensaje enviado!'
		const errorMsg = 'Hubo un error, intente más tarde.'
		const sending = 'Enviando...'

		return { successMsg, errorMsg, sending }
	}

	const handleSubmit = e => {
		const submitSettings = {
			dest: 'http://eurolam.cl/contact-form/index.php',
			fields: '.form-input',
			successMsg: contactMsgs().successMsg,
			errorMsg: contactMsgs().errorMsg,
			sending: contactMsgs().sending,
			closeMsg: true,
			urlencoded: true,
			reciever: 'penhold3r@gmail.com'
		}

		const form = document.querySelector('.contact-form')

		const humanForm = document.querySelector('.human')
		const human = humanForm.value === ''

		e.preventDefault()
		human && submitForm(form, submitSettings)
	}

	const handleFocus = (tgt, focus = false) => {
		focus ? tgt.current.classList.add('expanded') : tgt.current.classList.remove('expanded')
	}

	return (
		<section
			className="contact bg-color-dark-grey py-3"
			id="contacto"
			style={{ backgroundImage: `url(${contactBg})` }}
		>
			<div className="contact__content">
				<h2 className="contact-title section-title text-color-white">Contacto</h2>
				<form className="contact-form p-1" onSubmit={e => handleSubmit(e)}>
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
					<input type="text" className="human" tabIndex="-1" />
					<input
						className="form-submit bg-color-primary text-color-white py-h-1 px-1"
						type="submit"
						value="Enviar"
					/>
				</form>
				<ul className="contact-info p-none my-2">
					<li className="contact-info__item px-2">
						<Link to="https://goo.gl/maps/NPicfmfAmRhJq7tZ8" className="icon">
							<FontAwesomeIcon className="fa text-color-primary" icon={['fas', 'home']} />
						</Link>
						<p className="text-color-white m-none">
							C. Rodríguez Peña 2250, M5501 Godoy Cruz, Mendoza, Argentina.
						</p>
					</li>
					<li className="contact-info__item px-2">
						<Link to="mailto:info@eurolam.cl" className="icon">
							<FontAwesomeIcon
								className="fa text-color-primary"
								icon={['fas', 'envelope']}
							/>
						</Link>
						<Link to="mailto:info@eurolam.cl" className="text-color-white">
							<strong>info</strong>@eurolam.cl
						</Link>
					</li>
					<li className="contact-info__item px-2">
						<Link to="tel:+5492615086518" className="icon">
							<FontAwesomeIcon
								className="fa text-color-primary"
								icon={['fas', 'phone-alt']}
							/>
						</Link>
						<Link to="tel:+5492615086518" className="text-color-white">
							54 9 261 <strong>508 6518</strong>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Contact
