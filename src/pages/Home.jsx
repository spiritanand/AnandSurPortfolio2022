import React from "react";
import About from "../components/home/about/About.jsx";
import Contact from "../components/home/contact/Contact.jsx";
import Intro from "../components/home/intro/Intro.jsx";
import Projects from "../components/home/projects/Projects.jsx";

function Home(props) {
  return (
	<>
	  <Intro></Intro>
	  <About></About>
	  <Projects></Projects>
	  <Contact></Contact>
	</>
  );
}

export default Home;