import React from 'react'

import hero from '../images/eurolam-hero_landing.jpg'

const Landing = () => {
	return (
		<section className="landing">
			<img className="landing__image" src={hero} alt="" />
			<div className="landing__content">
				<h2 className="landing-text text-color-light-grey m-none p-2">
					<span>Tecnología &amp;</span>
					<br />
					<span>
						<strong>Trayectoria</strong>
					</span>
				</h2>
			</div>
			<div className="scrolly">
				<div className="wheely" />
			</div>
		</section>
	)
}

export default Landing
