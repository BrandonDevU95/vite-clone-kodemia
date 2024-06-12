// eslint-disable-next-line react/prop-types
export const Card = ({ icon, title, description }) => {
	return (
		<div className="card">
			<div className="card-icon">
				<span role="img" aria-label="icon">
					{icon}
				</span>
			</div>
			<div className="card-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
