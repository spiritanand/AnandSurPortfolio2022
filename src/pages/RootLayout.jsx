import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Preloader from "../components/preloader/Preloader.jsx";

function RootLayout(props) {
  return (
	<>
	  <Preloader/>
	  <Navbar></Navbar>
	  <main>
		<Outlet></Outlet>
	  </main>
	  <Footer></Footer>
	</>
  );
}

export default RootLayout;