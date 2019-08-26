const parallax = document.getElementById
("container");

window.addEventListener("scroll", function ()
{
	let offset = window.pageYOffset;
	container.style.backgroundPositionY = offset
	* 0.7 + "px";
})