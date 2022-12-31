import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/index.scss";

console.log(
  "%c%s",
  "color: #38b4fc; background: #050A30FF; font; font-size: 14px; padding: 10px",
  "Developed by Suryansh Anand 💡\nConnect - https://www.linkedin.com/in/anandsur/\nFollow -"
  + " https://github.com/spiritmonster/"
);

ReactDOM.createRoot(document.getElementById("root"))
		.render(
		  <React.StrictMode>
			<App/>
		  </React.StrictMode>,
		);
