const arms = document.querySelector("#armsMain");
const armsDesc = document.querySelector("#armsDesc");
const chest = document.querySelector("#chestMain");
const chestDesc = document.querySelector("#chestDesc");
const abs = document.querySelector("#absMain");
const absDesc = document.querySelector("#absDesc");
const back = document.querySelector("#backMain");
const backDesc = document.querySelector("#backDesc");
const legs = document.querySelector("#legsMain");
const legsDesc = document.querySelector("#legsDesc");

function showDiv(toClick, toShow) {
	toClick.addEventListener("click", function () {
		console.log(toShow.style.display);
		if (toShow.style.display != "block") toShow.style.display = "block";
		else toShow.style.display = "none";
	});
}

showDiv(arms, armsDesc);
showDiv(chest, chestDesc);
showDiv(abs, absDesc);
showDiv(back, backDesc);
showDiv(legs, legsDesc);

/**************************************************/
//Scrolling to choosen element
const aboutUs = document.querySelector("#aboutUs");
const exercises = document.querySelector("#exercises");

const aboutUsSection = document.querySelector(".aboutUsSection");

function ScrollTo(from, to) {
	from.addEventListener("click", function () {
		to.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	});
}

ScrollTo(aboutUs, aboutUsSection);
ScrollTo(exercises, arms);
/**************************************************/

//Playing audio when clicking on p
function audioPlay() {
	const audio = document.getElementById("manRoarAudio");
	audio.play();
}

/**************************************************/
const gallery = document.querySelectorAll(".gallery");
const imgs = document.querySelectorAll(".gallery img");
const fullpage = document.querySelector(".fullpage");

const divTest = document.createElement("div");

//Hiding full size photo
divTest.addEventListener("click", function () {
	divTest.style.display = "none";
});

//displaying full size photo
divTest.classList.add("fullpage");
document.body.appendChild(divTest);
imgs.forEach((img) => {
	img.addEventListener("click", function () {
		divTest.style.backgroundImage = "url(" + img.src + ")";
		divTest.style.display = "block";
	});
});
