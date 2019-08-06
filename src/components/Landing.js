import React, { useState, useEffect } from 'react'

//import hero from '../images/eurolam-hero_landing.jpg'

const context = require.context('../images/slider', true, /eurolam_slider-(\d+)\.jp(e?)g/)
const images = context.keys().map(key => context(key))
const slides = [
	{
		title: '1 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[0]
	},
	{
		title: '2 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[1]
	},
	{
		title: '3 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[2]
	},
	{
		title: '4 Lorem ipsum dolor',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit dolores consequuntur? Dicta, nam!',
		image: images[3]
	}
]

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
	}, [])

	//console.log(transition)

	return (
		<section className="landing">
			<div className={'landing__slider'}>
				{images.map((slide, key) => {
					const active = currSlide === key + 1

					return (
						<div
							id={`slide-0${key + 1}`}
							className={`slide ${active ? 'active' : ''}`}
							style={{ zIndex: active ? images.length + 1 : order[key] }}
							key={key}
						>
							<div
								className={`slide__image`}
								style={{
									animation: active
										? `slide${transition} ${interval}ms ease-in-out forwards, bright 1.5s forwards`
										: 'none'
								}}
							>
								<img src={slide} alt="" />
							</div>
						</div>
					)
				})}
			</div>

			<div className="landing__content">
				<h2 className="landing-text text-color-light-grey m-none p-2">
					<span>Tecnología &amp;</span>
					<br />
					<span>
						<strong>Trayectoria</strong>
					</span>
				</h2>
			</div>

			<div className="scrolly" onClick={scroll}>
				<div className="wheely" />
			</div>
		</section>
	)
}

export default Landing
