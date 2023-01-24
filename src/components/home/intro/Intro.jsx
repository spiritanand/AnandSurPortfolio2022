import {gsap} from "gsap";
import React, {
  useEffect,
  useLayoutEffect,
  useRef
} from "react";
import Typed from "typed.js";
import room from "../../../images/coding-room.jpg";
import handshake from "../../../images/emojis/handshake-yellow.png";
import location from "../../../images/emojis/location.png";
import magic from "../../../images/emojis/magic.png";
import rocket from "../../../images/emojis/rocket.png";
import "./intro.scss";

function Intro(props) {
  const introRef = useRef();
  const bgRef = useRef();
  const mouseRef = useRef();
  
  const typedElement = useRef(null);
  const typed = useRef(null);
  
  useEffect(() => {
	const options = {
	  strings   : [
		"Entrepreneur",
		"Developer",
		// " UI + UX Designer",
		"Learner"
	  ],
	  typeSpeed : 200,
	  backSpeed : 50,
	  cursorChar: "_",
	  loop      : "true",
	};
	
	typed.current = new Typed(typedElement.current, options);
	
	return () => {
	  typed.current.destroy();
	};
  }, []);
  
  useLayoutEffect(() => {
	const ctx = gsap.context(() => {
	  gsap.timeline()
		  .from(introRef.current, {
			x       : "-200%",
			duration: 3,
			delay   : 7,
		  })
		  .from(bgRef.current, {
			opacity : 0,
			duration: 3,
		  }, "-=2")
		  .from(mouseRef.current, {
			opacity : 0,
			duration: 3
		  }, ">")
	  ;
	}, introRef);
	
	return () => ctx.revert();
  }, []);
  
  return (
	<section id = "intro"
	>
	  <img src = {room}
		   alt = "coding-room"
		   className = "bg"
		   ref = {bgRef}
	  />
	  <div className = "introContent"
		   ref = {introRef}
	  >
		<div>
		  <p>
			Hello World
			<span><img src = {handshake}
					   alt = "handshake"
					   className = "emoji handshake"
			/></span>
			, I am
		  </p>
		</div>
		<header>
		  <h1>
			Suryansh Anand
		  </h1>
		  <h3>
			<span ref = {typedElement}></span>
		  </h3>
		</header>
		<div>
		  <p>
		  <span><img src = {magic}
					 alt = "magic"
					 className = "emoji magic"
		  /></span>
			Transforming Ideas into Code.
		  </p>
		  <p>
		  <span className = "spanRocket"><img src = {rocket}
											  alt = "rocket"
											  className = "emoji rocket"
		  /></span>
			1+ year of experience of working with React JS, CSS/SASS and Firebase to
			code
			frontend apps .
		  </p>
		  <p>
		  <span><img src = {location}
					 alt = "location"
					 className = "emoji location"
		  /></span>
			Based in Bengaluru, India 🇮🇳.
		  </p>
		</div>
	  </div>
	  
	  <div className = "mouse"
		   ref = {mouseRef}
	  >
		<div className = "scroller"></div>
	  </div>
	</section>
  );
}

export default Intro;