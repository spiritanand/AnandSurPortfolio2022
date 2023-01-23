import {gsap} from "gsap";
import React, {
  useLayoutEffect,
  useRef
} from "react";
import projects from "../../../images/emojis/projects.png";
import Hr from "../../UI/Hr/Hr.jsx";
import ProjectCard from "./ProjectCard.jsx";
import "./projects.scss";

const projectsContent = [
  {
	name  : "Vaartalap",
	tech  : [
	  "React",
	  "SASS",
	  "Firebase"
	],
	desc  : "Real-time chat app",
	live  : "https://vaartalapreactchat.web.app/",
	github: "https://github.com/spiritanand/Vaartalap",
  },
  {
	name  : "Prayogah",
	tech  : [
	  "React",
	  "MUI",
	  "Rest APIs"
	],
	desc  : "One-stop exercise search + discovery website.",
	live  : "https://prayogahfitnessmuiapp.web.app/",
	github: "https://github.com/spiritanand/Prayogah",
  },
  {
	name  : "Centrale Dashboard",
	tech  : [
	  "React",
	  "MUI",
	  "Tailwind CSS"
	],
	desc  : "Frontend of a dashboard of an e-commerce company.",
	live  : "https://centralefrontenddashboard.web.app/",
	github: "https://github.com/spiritanand/CentraleDashboard",
  },
  {
	name  : "Cryptochain",
	tech  : [
	  "React",
	  "Antd",
	  "RTK Query"
	],
	desc  : "Live news about cryptocurrencies.",
	live  : "https://cryptochainnews-57d1e.web.app/",
	github: "https://github.com/spiritanand/Cryptochain",
  },
  {
	name  : "Product Cart",
	tech  : [
	  "React",
	  "Redux",
	  "RTK Query",
	  "SASS"
	],
	desc  : "Sorting and Add to cart feature of an e-commerce site.",
	live  : "https://productreduxcart.web.app/",
	github: "https://github.com/spiritanand/ProductCart",
  },
  {
	name  : "Vity",
	tech  : [
	  "CSS",
	  "JavaScript",
	],
	desc  : "A game to add positivity in your life.",
	live  : "https://spiritanand.github.io/Vity/",
	github: "https://github.com/spiritanand/Vity",
  }
];

function Projects(props) {
  const projectRef = useRef();
  const projectCards = useRef();

  useLayoutEffect(() => {
	const ctx = gsap.context(() => {

	  // header
	  gsap.from(".projectHeader", {
		x            : "-150%",
		opacity      : 0,
		duration     : 2,
		scrollTrigger: {
		  trigger      : ".projectHeader",
		  start        : "25% 90%",
		  toggleActions: "restart none none reverse",
		}
	  });
	}, projectRef);

	return () => ctx.revert();

  }, []);
  
  return (
	<section id = "projects"
			 ref = {projectRef}
	>
	  <header className = "projectHeader">
		<h2>
		  Projects <img src = {projects}
						alt = "trophy"
						className = "emoji"
		/>
		  <Hr/>
		</h2>
		<p>
		  Each project is unique and has given me a practical understanding of the
		  technologies used in them.
		</p>
	  </header>
	  <div className = "projectCards"
		   ref = {projectCards}
	  >
		{projectsContent.map(project =>
		  (
			<ProjectCard key = {project.name}
						 project = {project}
			></ProjectCard>
		  )
		)}
	  </div>
	</section>
  );
}

export default Projects;