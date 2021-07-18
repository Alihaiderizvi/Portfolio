import AboutUs from "./components/about/AboutUs";
import Contact from "./components/contact/Contact";
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
			<Contact />
		</div>
	);
}

export default App;
