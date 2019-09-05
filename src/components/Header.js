import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../images/eurolam_logo-white.svg'

const Header = () => {
	const [hambState, setHambState] = useState(false)
	const [menuState, setMenuState] = useState(false)
	const [scrollHeader, setScrollHeader] = useState(false)

	const handleScroll = e => {
		const dark = window.pageYOffset + 100 > window.innerHeight
		setScrollHeader(dark)
	}

	const closeMenu = () => {
		setHambState(!hambState)
		setMenuState(!menuState)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<header className={scrollHeader ? 'site-header px-1 darken' : 'site-header px-1'}>
			<div className="site-header__inner">
				<h1 className="main-logo m-none py-h-1">
					<Link
						to="inicio"
						duration={500}
						smooth={true}
						className="main-logo__link text-color-primary"
					>
						<img src={logo} alt="Eurolam" />
					</Link>
				</h1>
				<div
					className={hambState ? 'hamb-menu crossed' : 'hamb-menu'}
					onClick={() => closeMenu()}
				>
					<div className="hamb-menu__bar" />
					<div className="hamb-menu__bar" />
					<div className="hamb-menu__bar" />
				</div>
				<div className={menuState ? 'side-menu open' : 'side-menu'}>
					<nav className="main-nav">
						<Link
							to="inicio"
							duration={500}
							smooth={true}
							onClick={() => closeMenu()}
							className="main-nav__link p-h-1 text-color-white"
						>
							Inicio
						</Link>
						<Link
							to="nosotros"
							duration={500}
							smooth={true}
							onClick={() => closeMenu()}
							className="main-nav__link p-h-1 text-color-white"
						>
							Nosotros
						</Link>
						<Link
							to="obras"
							duration={500}
							smooth={true}
							onClick={() => closeMenu()}
							className="main-nav__link p-h-1 text-color-white"
						>
							Obras
						</Link>
						<Link
							to="servicios"
							duration={500}
							smooth={true}
							onClick={() => closeMenu()}
							className="main-nav__link p-h-1 text-color-white"
						>
							Servicios
						</Link>
						<Link
							to="contacto"
							duration={500}
							smooth={true}
							onClick={() => closeMenu()}
							className="main-nav__link p-h-1 text-color-white"
						>
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
							<Link to="https://twitter.com" className="mx-q-1" title="Twitter">
								{/* <i class="fab fa-twitter" /> */}
								<FontAwesomeIcon className="fa" icon={['fab', 'twitter']} />
							</Link>
							<Link to="https://skype.com" className="mx-q-1" title="Skype">
								{/* <i class="fab fa-skype" /> */}
								<FontAwesomeIcon className="fa" icon={['fab', 'skype']} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
