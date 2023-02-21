import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, {
  useLayoutEffect,
  useRef
} from "react";
import about from "../../../images/emojis/aboutMe.png";
import skillsImg from "../../../images/emojis/skills.png";
import {skills} from "../../../scripts/skills.js";
import A from "../../UI/A.jsx";
import Hr from "../../UI/Hr/Hr.jsx";
import SkillCard from "../../UI/skillCard/SkillCard.jsx";
import "./about.scss";

gsap.registerPlugin(ScrollTrigger);

function About(props) {
  const aboutRef = useRef();
  const skillCardsRef = useRef();
  
  useLayoutEffect(() => {
	const ctx = gsap.context(() => {
	  
	  // header
	  gsap.from(".header", {
		x            : "-150%",
		opacity      : 0,
		duration     : 2,
		scrollTrigger: {
		  trigger      : ".header",
		  start        : "25% 90%",
		  toggleActions: "restart none none reverse",
		}
	  });
	  
	  //  desc
	  gsap.from(".desc", {
		x            : "-150%",
		opacity      : 0,
		duration     : 2,
		scrollTrigger: {
		  trigger      : ".desc",
		  start        : "30% 90%",
		  toggleActions: "restart none none reverse",
		}
	  });
	  
	  // skills
	  gsap.from(".skillsHeader", {
		x            : "-150%",
		opacity      : 0,
		duration     : 2,
		scrollTrigger: {
		  trigger      : ".skillsHeader",
		  start        : "20% 90%",
		  toggleActions: "restart none none reverse",
		}
	  });
	  
	  gsap.from(skillCardsRef.current.children, {
		y            : "150%",
		opacity      : 0,
		duration     : 3,
		stagger      : 0.2,
		scrollTrigger: {
		  trigger      : ".skillCards",
		  start        : "15% 90%",
		  toggleActions: "restart none none reverse",
		}
	  });
	  
	}, aboutRef);
	
	return () => ctx.revert();
	
  }, []);
  
  return (
	<section id = "about"
			 ref = {aboutRef}
	>
	  <header className = "header">
		<h2>
		  About Me <img src = {about}
						alt = "crown"
						className = "emoji"
		/>
		  <Hr/>
		</h2>
		<p>
		  Know about my journey, skill-set and experience.
		</p>
	  </header>
	  
	  <div className = "desc"
	  >
		<p>
		  I'm a Problem Solver, Full Stack Developer and lifelong Learner. I am currently
		  working as a SDE in <A href = "https://avisbudgetgroup.com/">Avis</A>.
		</p>
		<p>
		  Currently, I am learning more about Next Js and UI/UX. I post about my learnings
		  and new projects every week
		  on <A href = "https://www.linkedin.com/in/anandsur/">LinkedIn</A>. Consider
		  following me if you want to gain insights on startups and frontend web
		  technologies.
		</p>
		<p>
		  I'm open to collaborating with fellow developers and designers to build kick-ass
		  products.If you feel like you have a role that matches my skill-set (and
		  attitude), do not hesitate to drop
		  a <A href = "mailto:hi@anandsur.com">message</A>.
		</p>
	  </div>
	  
	  <div className = "skills"
	  >
		<h3 className = "skillsHeader">
		  Skills <img src = {skillsImg}
					  alt = "bullsEye"
					  className = "emoji"
		/>
		</h3>
		<div className = "skillCards"
			 ref = {skillCardsRef}
		>
		  {skills.map(skill => (
			<SkillCard key = {skill}>
			  {skill}
			</SkillCard>
		  ))}
		</div>
	  </div>
	</section>
  );
}

export default About;
