import poolImg from "../img/pool.jpg";
import Carousel from "../components/Carousel";

function Amenities() {
	return (
		<>
		
			<div
				className="jumbotron jumbotron-fluid text-center"
				id="amenitiesjumbotron"
			>
				<div className="container">
					<h1 className="slogan-1">
						EXPERINCE
						<br />
						COSMO FITNESS
					</h1>
				</div>
			</div>

			<div className="amenities-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
				<h1 className="display-4">Amenities</h1>

				<p className="lead">
					Here is a visual of what to expect in our fitness facilities
				</p>
			</div>

			<Carousel pic1={poolImg}  />

			{/* <div className="container mb-5">
				<div className="row row-content">
					<div className="col-md-8 mx-auto">
						<div
							id="amenitiesCarousel"
							className="carousel slide carousel-fade"
							data-ride="carousel"
						>
							<ol className="carousel-indicators">
								<li
									data-target="#amenitiesCarousel"
									data-slide-to="0"
									className="active"
								></li>
								<li data-target="#amenitiesCarousel" data-slide-to="1"></li>
								<li data-target="#amenitiesCarousel" data-slide-to="2"></li>
								<li data-target="#amenitiesCarousel" data-slide-to="3"></li>
								<li data-target="#amenitiesCarousel" data-slide-to="4"></li>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										className="d-block w-100"
										src={poolImg}
										alt="Breadcrumb Trail Campground"
									/>
									<div className="carousel-caption">
										<h3>Pool</h3>
										<p className="d-none d-sm-block">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime mollitia, molestiae quas vel sint commodi.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="img/sauna.jpg"
										alt="React Lake Campground"
									/>
									<div className="carousel-caption">
										<h3>Sauna</h3>
										<p className="d-none d-sm-block">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime mollitia, molestiae quas vel sint commodi.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="img/cardio.jpg"
										alt="React Lake Campground"
									/>
									<div className="carousel-caption">
										<h3>Cardio machines & Weights</h3>
										<p className="d-none d-sm-block">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime mollitia, molestiae quas vel sint commodi.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="img/lockers.jpg"
										alt="React Lake Campground"
									/>
									<div className="carousel-caption">
										<h3>Locker Room and Showers</h3>
										<p className="d-none d-sm-block">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime mollitia, molestiae quas vel sint commodi.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="img/personaltraining.jpg"
										alt="React Lake Campground"
									/>
									<div className="carousel-caption">
										<h3>Personal Trainers</h3>
										<p className="d-none d-sm-block">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime mollitia, molestiae quas vel sint commodi.
										</p>
									</div>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="img/basketball.jpg"
										alt="Chrome River Campground"
									/>
									<div className="carousel-caption">
										<h3>Basketball Court</h3>
										<p className="d-none d-sm-block">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime mollitia, molestiae quas vel sint commodi.
										</p>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									href="#amenitiesCarousel"
									role="button"
									data-slide="prev"
								>
									<span className="carousel-control-prev-icon"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a
									className="carousel-control-next"
									href="#amenitiesCarousel"
									role="button"
									data-slide="next"
								>
									<span className="carousel-control-next-icon"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default Amenities;
