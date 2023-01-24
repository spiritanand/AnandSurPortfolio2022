import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, {
  useEffect,
  useRef,
  useState
} from "react";
import {RiExternalLinkFill} from "react-icons/all.js";
import {NavLink} from "react-router-dom";
import logo from "../../images/Favicon.gif";
import A from "../UI/A.jsx";
import "./navbar.scss";


gsap.registerPlugin(ScrollTrigger);

const animation = gsap.timeline({
  paused  : true,
  reversed: true
});

function Navbar(props) {
  const navbarRef = useRef();
  const menuRef = useRef();
  const navRef = useRef();
  
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const controlNavbar = () => {
	if (typeof window !== "undefined") {
	  if (window.scrollY > lastScrollY) {
		setShow(false);
	  } else {
		setShow(true);
	  }
	  setLastScrollY(window.scrollY);
	}
  };
  
  useEffect(() => {
	if (typeof window !== "undefined") {
	  window.addEventListener("scroll", controlNavbar);
	  
	  return () => {
		window.removeEventListener("scroll", controlNavbar);
	  };
	}
  }, [lastScrollY]);
  
  const executeScroll = (e, id) => {
	const selectedElement = document.getElementById(id);
	const allNavLinks = document.querySelectorAll(".navLink");
	allNavLinks.forEach(navLink => {
	  navLink.classList.remove("selected");
	});
	
	e.target.classList.add("selected");
	selectedElement.scrollIntoView({
	  block   : "start",
	  behavior: "smooth"
	});
	
	handleNavLinkClick();
  };
  
  // hamburger menu
  useEffect(() => {
	const lines = menuRef.current.children;
	animation
	  .to(lines[1], {
		opacity : 0,
		duration: 0.3
	  })
	  .to(lines[0], {
		rotate  : "45deg",
		y       : "0.9rem",
		duration: 0.2
	  })
	  .to(lines[2], {
		rotate  : "-45deg",
		y       : "-0.9rem",
		duration: 0.2
	  })
	  .to(navRef.current, {
		opacity        : 1,
		bottom         : "-150%",
		backgroundColor: "#050a30",
		duration       : 0.5
	  });
  }, []);
  
  const handleMenuClick = () => {
	animation.reversed()
	? animation.play()
	: animation.reverse();
  };
  
  const handleNavLinkClick = () => {
	animation.reverse();
  };
  
  return (
	<nav className = {`navbar ${show
								? ""
								: "hide"}`}
		 ref = {navbarRef}
	>
	  <NavLink to = "/"
	  >
		<img src = {logo}
			 alt = "AnandSur Logo"
			 className = "logo"
		/>
	  </NavLink>
	  <ul ref = {navRef}>
		<NavLink to = "/#intro"
				 onClick = {(e) => executeScroll(e, "intro")}
				 className = "navLink selected"
		>
		  Home
		</NavLink>
		<NavLink to = "/#about"
				 onClick = {(e) => executeScroll(e, "about")}
				 className = "navLink"
		>
		  About
		</NavLink>
		<NavLink to = "/#projects"
				 onClick = {(e) => executeScroll(e, "projects")}
				 className = "navLink"
		>
		  Projects
		</NavLink>
		<A href = "https://blog.anandsur.com/"
		   className = "navLink blogLink"
		>
		  Blog <RiExternalLinkFill/>
		</A>
		<NavLink to = "/#contact"
				 onClick = {(e) => executeScroll(e, "contact")}
				 className = "navLink"
		>
		  Contact
		</NavLink>
	  </ul>
	  
	  <div className = "menu"
		   onClick = {handleMenuClick}
	  >
		<div className = "menu-line-wrapper"
			 ref = {menuRef}
		>
		  <div className = "menu-line menu-line-1"></div>
		  <div className = "menu-line menu-line-2"></div>
		  <div className = "menu-line menu-line-3"></div>
		</div>
	  </div>
	
	</nav>
  );
}

export default Navbar;
