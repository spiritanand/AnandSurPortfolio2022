import React from "react";
import "./skillCard.scss";

function SkillCard({children}) {
  return (
	<div className="skillCard">
	  {children}
	</div>
  );
}

export default SkillCard;