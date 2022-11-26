import { Link } from "react-router-dom";
import logo from "../img/logo_200x200.png";

function Header() {
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-light">
				<div className="container">
					<Link to="/" className="navbar-brand">
						<img
							src={logo}
							className="me-2"
							height="40"
							alt="CosmoFitness Logo"
							loading="lazy"
						/>
						Cosmo Fitness
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<a className="nav-item nav-link" href="index.html">
								Home
							</a>
							<a className="nav-item nav-link" href="memberships.html">
								Memberships
							</a>
							<a className="nav-item nav-link" href="classes.html">
								Classes
							</a>
							<Link
								to="/amenities"
								className="nav-item nav-item nav-link active"
							>
								Amenities
							</Link>
							<a className="nav-item nav-link" href="about.html">
								About
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
