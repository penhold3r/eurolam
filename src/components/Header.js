import React, { useState } from 'react'
import Link from './Link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../images/eurolam_logo-white.svg'

const Header = () => {
	const [hambState, setHambState] = useState(false)
	const [menuState, setMenuState] = useState(false)

	return (
		<header className="site-header px-1">
			<div className="site-header__inner">
				<h1 className="main-logo m-none py-h-1">
					<Link to="/" className="main-logo__link text-color-primary">
						<img src={logo} alt="Eurolam" />
					</Link>
				</h1>
				<div
					className={hambState ? 'hamb-menu crossed' : 'hamb-menu'}
					onClick={() => {
						setHambState(!hambState)
						setMenuState(!menuState)
					}}
				>
					<div className="hamb-menu__bar" />
					<div className="hamb-menu__bar" />
					<div className="hamb-menu__bar" />
				</div>
				<div className={menuState ? 'side-menu open' : 'side-menu'}>
					<nav className="main-nav">
						<Link to="/" className="main-nav__link text-color-white">
							Inicio
						</Link>
						<Link to="/" className="main-nav__link text-color-white">
							Nosotros
						</Link>
						<Link to="/" className="main-nav__link text-color-white">
							Obras
						</Link>
						<Link to="/" className="main-nav__link text-color-white">
							Servicios
						</Link>
						<Link to="/" className="main-nav__link text-color-white">
							Contacto
						</Link>
					</nav>
					<div className="nav-foot p-1">
						<Link to="mailto:info@eurolam.cl" className="nav-foot__mail m-1">
							info@eurolam.cl
						</Link>
						<div className="nav-foot__social m-1">
							<Link to="https://facebook.com" className="mx-q-1" title="Facebook">
								{/* <i class="fab fa-facebook-f" /> */}
								<FontAwesomeIcon className="fa" icon={['fab', 'facebook-f']} />
							</Link>
							<Link to="https://instagram.com" className="mx-q-1" title="Instagram">
								{/* <i class="fab fa-instagram" /> */}
								<FontAwesomeIcon className="fa" icon={['fab', 'instagram']} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
