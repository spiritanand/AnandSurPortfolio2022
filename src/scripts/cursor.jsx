const cursor = document.querySelector(".cursor");

console.log(
  "%c%s",
  "color: #38b4fc; background: #050A30FF; font; font-size: 14px; padding: 10px",
  "Developed by Suryansh Anand 💡\nConnect - https://www.linkedin.com/in/anandsur/\nFollow -"
  + " https://github.com/spiritmonster/"
);

// mousemove
document.addEventListener("mousemove", e => {
  cursor.setAttribute(
	"style", `top:${e.pageY - 7}px; left:${e.pageX - 7}px; opacity:1`);
});

// scroll
document.addEventListener("scroll", (e) => {
  cursor.setAttribute(
	"style", ``);
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