import React, { useState, useEffect } from 'react'

const context = require.context('../images/slider', true, /eurolam_slider-(\d+)\.jp(e?)g/)
const images = context.keys().map(key => context(key))

const Landing = () => {
	const [currSlide, setCurrSlide] = useState(1)
	const [order, setNewOrder] = useState(images.map((e, i) => i + 1))
	const [transition, setTransition] = useState('top')

	const directions = ['top', 'right', 'down', 'left']
	const interval = 5000

	const scroll = () => {
		const about = document.querySelector('.about')
		about.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		let dirIndex = 0

		let newOrder = [...order]

		let currSlide = 1
		setInterval(() => {
			let last = newOrder.pop()
			newOrder.unshift(last)
			setNewOrder(newOrder)

			currSlide = currSlide < images.length ? currSlide + 1 : 1
			setCurrSlide(currSlide)

			dirIndex = dirIndex < directions.length - 1 ? dirIndex + 1 : 0
			setTransition(directions[dirIndex])
		}, interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	//console.log(transition)

	return (
		<section className='landing' id='inicio'>
			<div className={'landing__slider'}>
				{images.map((slide, key) => {
					const active = currSlide === key + 1

					return (
						<div
							id={`slide-0${key + 1}`}
							className={`slide ${active ? 'active' : ''}`}
							style={{ zIndex: active ? images.length + 1 : order[key] }}
							key={key}>
							<div
								className={`slide__image`}
								style={{
									animation: active
										? `slide${transition} ${interval}ms ease-in-out forwards, bright 1.5s forwards`
										: 'none',
								}}>
								<img src={slide} alt='' />
							</div>
						</div>
					)
				})}
			</div>

			<div className='landing__content'>
				<h2 className='landing-text text-color-white m-none p-2'>
					<span>Excelencia</span>
					<br />
					<span>&amp; Trayectoria</span>
					<br />
					<span className='smaller text-color-primary'>en Vigas Laminadas</span>
				</h2>
				<p className='slogan text-color-white px-2'>
					<span>mas de 60 años acompañando crecimiento e innovacion.</span>
				</p>
			</div>

			<div className='scrolly' onClick={scroll} role='button' onKeyPress={scroll} tabIndex='0'>
				<div className='wheely' />
			</div>
		</section>
	)
}

export default Landing
