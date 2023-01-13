import {gsap} from "gsap";
import React, {
  useLayoutEffect,
  useRef
} from "react";
import {
  AiFillGithub,
  FiExternalLink
} from "react-icons/all.js";
import A from "../../UI/A.jsx";
import SkillCard from "../../UI/skillCard/SkillCard.jsx";
import "./ProjectCard.scss";

function ProjectCard({project}) {
  const {
		  name,
		  desc,
		  tech,
		  github,
		  live
		} = project;
  
  const projectCardRef = useRef();
  
  useLayoutEffect(() => {
	const ctx = gsap.context(() => {
	  
	  // card
	  gsap.from(projectCardRef.current, {
		y            : "100%",
		opacity      : 0,
		duration     : 2,
		scrollTrigger: {
		  trigger      : projectCardRef.current,
		  toggleActions: "restart none none reverse",
		},
	  });
	  
	}, projectCardRef);
	
	return () => ctx.revert();
	
  }, []);
  
  return (
	<div className = "projectCard"
		 ref = {projectCardRef}
	>
	  <header className = "projectCardHeader">
		<h3>
		  {name}
		</h3>
		<p>
		  {desc}
		</p>
	  </header>
	  <div className = "tech">
		{tech.map(t => (
		  <SkillCard key = {t}>
			{t}
		  </SkillCard>
		))}
	  </div>
	  <div className = "links">
		<A href = {github}
		>
		  <AiFillGithub size = {50}></AiFillGithub>
		</A>
		<A href = {live}
		>
		  <FiExternalLink size = {50}></FiExternalLink>
		</A>
	  </div>
	</div>
  );
}

export default ProjectCard;
