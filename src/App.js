import AboutUs from "./components/about/AboutUs";
import Header from "./components/header/Header";
import SkillsSection from "./components/skills/SkillsSection";

function App() {
	return (
		<div>
			{/* Navbar is inside Header */}
			<Header />
			<AboutUs />
			<SkillsSection />
		</div>
	);
}

export default App;
