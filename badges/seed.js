function animateNext(what, delay) {
	var dudes = document.querySelectorAll(what),
		i = 0;
	doIt();
	//console.log(dudes.length);

	function doIt() {
		if (i < dudes.length) {
			dudes[i].classList.add('comeIn');
			i++;
			setTimeout(doIt, delay);
		}
	}
}
// On load
document.addEventListener("DOMContentLoaded", allLoaded);

function allLoaded(event) {
	console.log("DOM fully loaded and parsed");
	var chunks = document.getElementsByClassName("chunk");
	for (var i = 0; i < chunks.length; i++) {
		chunks[i].onclick = togglePop;
	}
	var toggles = document.querySelectorAll("a.toggle");
	for (i = 0; i < toggles.length; i++) {
		toggles[i].onclick = togglePop;
	}
}

function togglePop() {
	//console.log("It worked!");
	var myPop = document.getElementById("popup"),
		bg = document.querySelector("#bg");
	myPop.classList.toggle("scaleUp");
	if (bg.style.display == "none") {
		bg.style.display = "block";
		bg.style.opacity = 1;
	} else {
		bg.style.display = "none";
		bg.style.opacity = 0;
	}
}