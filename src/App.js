import AboutUs from "./components/about/AboutUs";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import SkillsSection from "./components/skills/SkillsSection";

function App() {
	return (
		<div>
			{/* Navbar is inside Header */}
			<Header />
			<AboutUs />
			<SkillsSection />
			<Services />
			<Experience />
		</div>
	);
}

export default App;
