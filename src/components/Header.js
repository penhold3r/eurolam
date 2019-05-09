import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/eurolam_logo-white.svg'

const Header = () => (
	<header className="site-header">
		<div className="site-header__inner">
			<h1 className="main-logo m-none">
				<Link to="/" className="main-logo__link text-color-primary">
					<img src={logo} alt="Eurolam" />
				</Link>
			</h1>
			<nav className="main-nav">
				<Link to="/" className="main-nav__link text-color-white p-h-1 mx-q-1">
					Inicio
				</Link>
				<Link to="/" className="main-nav__link text-color-white p-h-1 mx-q-1">
					Nosotros
				</Link>
				<Link to="/" className="main-nav__link text-color-white p-h-1 mx-q-1">
					Obras
				</Link>
				<Link to="/" className="main-nav__link text-color-white p-h-1 mx-q-1">
					Servicios
				</Link>
				<Link to="/" className="main-nav__link text-color-white p-h-1 mx-q-1">
					Contacto
				</Link>
			</nav>
		</div>
	</header>
)

export default Header
