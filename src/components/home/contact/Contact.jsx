import {gsap} from "gsap";
import React, {
  useLayoutEffect,
  useRef
} from "react";
import {
  AiFillGithub,
  BsFillTelephoneOutboundFill,
  BsLinkedin,
  GrMail,
  SiGooglemeet
} from "react-icons/all.js";
import A from "../../UI/A.jsx";
import Hr from "../../UI/Hr/Hr.jsx";
import "./contact.scss";

function Contact(props) {
  const contactRef = useRef();
  const contactHeader = useRef();
  const contactLinks = useRef();
  
  useLayoutEffect(() => {
	const ctx = gsap.context(() => {
	  
	  // header
	  gsap.from(".contactHeader", {
		x            : "-150%",
		opacity      : 0,
		duration     : 2,
		scrollTrigger: {
		  trigger      : ".contactHeader",
		  start        : "25% 90%",
		  toggleActions: "restart none none reverse",
		}
	  });
	  
	  //  desc
	  gsap.from(contactLinks.current.children, {
		x            : "-150%",
		opacity      : 0,
		duration     : 2,
		stagger      : 0.5,
		scrollTrigger: {
		  trigger      : ".contactLinks",
		  toggleActions: "restart none none reverse",
		}
	  });
	  
	}, contactRef);
	
	return () => ctx.revert();
	
  }, []);
  
  return (
	<section id = "contact"
			 ref = {contactRef}
	>
	  <header className = "contactHeader"
	  >
		<h2>
		  Let's Connect
		  <Hr></Hr>
		</h2>
		<p>
		  Drop a Hi, and we can get started from there.
		</p>
	  </header>
	  <div ref = {contactLinks}
		   className = "contactLinks"
	  >
		<A href = "https://github.com/spiritanand/">
		  <AiFillGithub size = {35}></AiFillGithub>
		</A>
		<A href = "https://www.linkedin.com/in/spiritanand/">
		  <BsLinkedin size = {35}></BsLinkedin>
		</A>
		<A href = "mailto:hi@anandsur.com">
		  <GrMail size = {35}></GrMail>
		</A>
		<A href = "https://topmate.io/spiritanand?utm_source=topmate&utm_medium=popup&utm_campaign=SocialProfile">
		  <SiGooglemeet size = {35}/>
		</A>
		<A href = "tel:+917032983019">
		  <BsFillTelephoneOutboundFill size = {35}/>
		</A>
	  </div>
	</section>
  );
}

export default Contact;