import React, {useLayoutEffect} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./pages/RootLayout.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path = "/"
		 element = {<RootLayout/>}
  >
	<Route index
		   element = {<Home/>}
	></Route>
  </Route>
));

function App(props) {
  useLayoutEffect(() => {
	const cursor = document.querySelector(".cursor");

// mousemove
	document.addEventListener("mousemove", e => {
	  cursor.setAttribute(
		"style", `top:${e.pageY - 7}px; left:${e.pageX - 7}px; opacity:1`);
	});

// scroll
	document.addEventListener("scroll", (e) => {
	  console.log(e);
	  cursor.setAttribute(
		"style", `top:-100%; left:-100%;`);
	});

// click events
	document.addEventListener("click", (e) => {
	  cursor.classList.remove("expand");
	  
	  cursor.setAttribute(
		"style", `top:${e.pageY - 7}px; left:${e.pageX - 7}px; opacity:1`);
	  cursor.classList.add("expand");
	  setTimeout(() => {
		cursor.classList.remove("expand");
		if ("ontouchstart" in document.documentElement) {
		  cursor.setAttribute(
			"style", `display:none`);
		}
	  }, 500);
	});
	
	return () => {
	  // mousemove
	  document.removeEventListener("mousemove", e => {
		cursor.setAttribute(
		  "style", `top:${e.pageY - 7}px; left:${e.pageX - 7}px; opacity:1`);
	  });

// scroll
	  document.removeEventListener("scroll", (e) => {
		cursor.setAttribute(
		  "style", ``);
	  });

// click events
	  document.removeEventListener("click", (e) => {
		cursor.classList.remove("expand");
		
		cursor.setAttribute(
		  "style", `top:${e.pageY - 7}px; left:${e.pageX - 7}px; opacity:1`);
		cursor.classList.add("expand");
		setTimeout(() => {
		  cursor.classList.remove("expand");
		  if ("ontouchstart" in document.documentElement) {
			cursor.setAttribute(
			  "style", `display:none`);
		  }
		}, 500);
	  });
	};
  }, []);
  
  
  return (
	<RouterProvider router = {router}></RouterProvider>
  );
}

export default App;