import React from "react";
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
  return (
	<RouterProvider router = {router}></RouterProvider>
  );
}

export default App;