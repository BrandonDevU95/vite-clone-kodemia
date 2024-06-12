export default function Hero() {
	return (
		<>
			<div className="hero">
				<div className="hero-content">
					<div className="title">
						<h1 id="hero-title">Vite</h1>
						<h2 id="hero-subtitle">
							Next Generation <br /> Frontend Tooling
						</h2>
						<p id="hero-cta">
							Get ready for a development environment that can{' '}
							<br /> finally catch up with you.
						</p>
						<div className="hero-pills">
							<button className="rounded-pill">
								Get Started
							</button>
							<button className="rounded-pill">Why Vite</button>
							<button className="rounded-pill">
								View on GitHub
							</button>
							<button className="rounded-pill">
								ViteConf 23!
							</button>
						</div>
					</div>
					<div className="logo">
						<img
							src="https://vitejs.dev/logo-with-shadow.png"
							alt="Vite Logo"
							id="vite-logo"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
