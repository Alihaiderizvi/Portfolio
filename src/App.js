import AboutUs from "./components/about/AboutUs";
import Header from "./components/header/Header";

function App() {
	return (
		<div>
			{/* Navbar is inside Header */}
			<Header />
			<AboutUs />
		</div>
	);
}

export default App;
