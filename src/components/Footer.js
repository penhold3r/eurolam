import React from 'react'

const Footer = () => {
	return (
		<footer className="footer bg-dark-grey p-1">
			<div className="footer__copy">
				<small>&copy; {new Date().getFullYear()}, Eurolam</small>
			</div>
		</footer>
	)
}

export default Footer
