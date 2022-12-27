import React from "react";
import {DiGitBranch} from "react-icons/all.js";
import A from "../UI/A.jsx";
import "./footer.scss";

function Footer(props) {
  return (
	<footer>
	  <p>
		Designed and Developed by
	  </p>
	  <h4>
		Suryansh Anand
	  </h4>
	  <A href = "https://github.com/spiritmonster/AnandSurPortfolio">
		<p>
		  Fork Me!
		</p>
		<DiGitBranch size = {30}></DiGitBranch>
		<p>
		  No copyright :)
		</p>
	  </A>
	</footer>
  );
}

export default Footer;