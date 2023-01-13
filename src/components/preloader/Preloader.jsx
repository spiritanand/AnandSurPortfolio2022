import {gsap} from "gsap";
import React, {
  useLayoutEffect,
  useRef
} from "react";
import ReactDOM from "react-dom";
import logo from "../../images/anandsurlogo.gif";
import "./preloader.scss";

function Preloader(props) {
  const preloaderRef = useRef();
  const logoRef = useRef();
  const skillListRef = useRef();
  
  useLayoutEffect(() => {
	const ctx = gsap.context(() => {
	  gsap.timeline()
		  .fromTo(
			logoRef.current, {
			  opacity : 0,
			  scale   : 0,
			  rotation: -360
			}, {
			  opacity : 1,
			  scale   : 1,
			  rotation: 360,
			  duration: 3,
			  ease    : "circ"
			})
		  .fromTo(skillListRef.current, {
			opacity: 0,
			scale  : 0,
		  }, {
			opacity : 1,
			scale   : 1,
			duration: 2,
		  })
		  .to(skillListRef.current.children, {
			duration: 2,
			y       : "-6rem",
			ease    : "linear",
		  })
		  .to(preloaderRef.current, {
			zIndex  : "-99999",
			opacity : "0",
			y       : "-100 %",
			duration: 3,
			ease    : "slow",
		  });
	}, logoRef, skillListRef);
	
	return () => ctx.revert();
  }, []);
  
  return ReactDOM.createPortal(
	<div className = "preloader"
		 ref = {preloaderRef}
	>
	  <img src = {logo}
		   alt = "AnandSur Logo"
		   ref = {logoRef}
	  />
	  <div className = "skillList"
		   ref = {skillListRef}
	  >
		<span>Entrepreneur</span>
		<span>Developer</span>
		{/*<span>Designer</span>*/}
		<span>ANAND</span>
		<span>SUR</span>
	  </div>
	</div>,
	document.getElementById("preload-root")
  );
}

export default Preloader;