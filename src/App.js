import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";
import Amenities from "./views/Amenities";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="amenities" element={<Amenities />} />
				{/* <Route path="contact" element={<ContactPage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="directory" element={<CampsitesDirectoryPage />} />
				<Route path="directory/:campsiteId" element={<CampsiteDetailPage />} /> */}
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
